Example internal/database/pgopencode/pgopencode.go
```
package pgopencode

import (
	"os"
	"sync"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var (
	DB *gorm.DB
	mu sync.Mutex
)

func Connect() *gorm.DB {
	mu.Lock()
	defer mu.Unlock()
	if DB != nil {
		sqlDB, err := DB.DB()
		if err == nil {
			if err := sqlDB.Ping(); err == nil {
				return DB
			}
		}
		DB = nil
	}
	dsn := os.Getenv("PGOPENCODE")
	db, err := gorm.Open(
		postgres.Open(dsn),
		&gorm.Config{},
	)
	if err != nil {
		return nil
	}
	sqlDB, err := db.DB()
	if err != nil {
		return nil
	}
	if err := sqlDB.Ping(); err != nil {
		return nil
	}
	sqlDB.SetMaxOpenConns(100)
	sqlDB.SetMaxIdleConns(50)
	DB = db
	return DB
}
```

Example internal/controller/templatedbqueryget/templatedbqueryget.go
```
package templatedbqueryget

import (
	"context"
	"go-gin-standard/internal/database/pgopencode"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

// Request
type Request struct {
	Username string `form:"username" binding:"required"`
}

// Response
type Response struct {
	Status  string      `json:"status"`
	Message string      `json:"message"`
	Data    interface{} `json:"data"`
	Version interface{} `json:"version"`
}

// Validate
func validate() error {
	/*
		github.com/go-playground/validator/v10

		Add custom validation here if needed.
	*/
	return nil
}

type AuthUser struct {
	ID              int64      `json:"id" gorm:"column:id"`
	CreatedAt       time.Time  `json:"created_at" gorm:"column:created_at"`
	UpdatedAt       time.Time  `json:"updated_at" gorm:"column:updated_at"`
	Email           string     `json:"email" gorm:"column:email"`
	Username        *string    `json:"username" gorm:"column:username"`
	Status          string     `json:"status" gorm:"column:status"`
	EmailVerifiedAt *time.Time `json:"email_verified_at" gorm:"column:email_verified_at"`
}

func getAuthUserByUsername(ctx context.Context, db *gorm.DB, name string) (*AuthUser, error) {
	// Step 1: Query
	var user AuthUser
	query := `
		SELECT
			id,
			created_at,
			updated_at,
			email,
			username,
			status,
			email_verified_at
		FROM auth_user
		WHERE username = ?
		LIMIT 1
	`
	err := db.WithContext(ctx).Raw(query, name).Scan(&user).Error
	if err != nil {
		return nil, err
	}
	// Step 2: Check if user is found
	if user.ID == 0 {
		return nil, gorm.ErrRecordNotFound
	}
	// Step 3: Return the data
	return &user, nil
}

type Version struct {
	Version string `json:"version" gorm:"column:version"`
}

func getVersion(ctx context.Context, db *gorm.DB) (*Version, error) {
	// Step 1: Query
	var version Version
	query := `
		SELECT VERSION()
	`
	err := db.WithContext(ctx).Raw(query).Scan(&version).Error
	if err != nil {
		return nil, err
	}
	// Step 2: Check if user is found
	if version.Version == "" {
		return nil, gorm.ErrRecordNotFound
	}
	// Step 3: Return the data
	return &version, nil
}

// Main handler function
func Handler(c *gin.Context) {
	var req Request

	// Step 1: Validate query parameter request
	if err := c.ShouldBindQuery(&req); err != nil {
		c.JSON(http.StatusBadRequest, Response{
			Status:  "error",
			Message: "Invalid request data",
			Data:    nil,
			Version: nil,
		})
		return
	}

	// Step 2: Validate request
	if err := validate(); err != nil {
		c.JSON(http.StatusBadRequest, Response{
			Status:  "error",
			Message: err.Error(),
			Data:    nil,
			Version: nil,
		})
		return
	}

	// Step 3: Connect to database
	db := pgopencode.Connect()

	// Step 4: Main logic
	user, err := getAuthUserByUsername(c.Request.Context(), db, req.Username)
	if err != nil {
		c.JSON(http.StatusNotFound, Response{
			Status:  "error",
			Message: "Not found",
			Data:    nil,
			Version: nil,
		})
		return
	}

	version, err := getVersion(c.Request.Context(), db)
	if err != nil {
		c.JSON(http.StatusNotFound, Response{
			Status:  "error",
			Message: "Not found",
			Data:    nil,
			Version: nil,
		})
		return
	}

	// Step 5: Return response
	c.JSON(http.StatusOK, Response{
		Status:  "ok",
		Message: "User retrieved successfully",
		Data:    user,
		Version: version,
	})
}

```

ช่วยเขียน Skill ให้ AI Agent เข้าใจให้หน่อย เขียน SKILL ให้ละเอียดให้ AI ปฏิบัติตามอยากถูกต้อง พร้อมระบุชื่อ skill ด้วยว่าจะต้องตั้งชื่อไฟล์ skill ว่ายังไง ตั้งชื่อไฟล์ skill .opencode/skills/gin-gorm-api-standard

1. func Handler(c *gin.Context) {} คือ main handler function ของ API endpoint
2. การเขียน struct จะต้องมี 
	- Request
	- Response
3. การเขียน Response format จะต้องเขียน format แบบนี้
```
{
  "status": "ok" | "error",
  "message": "",

  "key": "value", ตามโจร์ยที่กำหนด
}
```
4. เขียน logic ของ API endpoint จะต้องมีขั้นตอนดังนี้
- Step 1: Validate query parameter request
- Step 2: Validate request
- Step 3: Connect to database
- Step 4: Main logic 
- Step 5: Return response
5. การเขียน connect database จะต้องใช้ [model connect database].Connect() เพื่อเชื่อมต่อกับฐานข้อมูล
6. การเขียน Query database จะต้องใช้ [model connect database].DB เพื่อเข้าถึงฐานข้อมูล และการเขียน Query แต่ละครั้งจะต้องเขียนเป็น sub function เท่านั้น เหมือนกับตัวอย่างนี้
```
[มีหรือไม่มีก็ได้], err := [sub function name](c.Request.Context(), db, [parameter...])
if err != nil {
	c.JSON(http.StatusNotFound, Response{
		Status:  "error",
		Message: "Not found",
		[key...]
	})
	return
}
```
7. การเขียน SQL format คำสั่ง SQL จะต้องเป็น ตัวใหญ่ทั้งหมด และต้องมีการเว้นวรรค colume เท่านั้นต้องใช้งานเหมือนกับ ชื่อ colume จริง
8. การเขียนภาษา SQL format จะต้องการเขียน Raw SQL เท่านั้น และต้องใช้ db.WithContext(ctx).Raw(query, [parameter...).Scan(&[struct]) เพื่อทำการ query ข้อมูล
9. การเขียน struct ของข้อมูลที่ query จาก database จะต้องมีการระบุ gorm:"column:[column_name]" เพื่อให้ตรงกับชื่อ column จริงใน database
10. การเขียน struct จะต้องประกาศ struct ข้างบน sub function ของ query database และต้องมีการระบุ json:"[column_name]" เพื่อให้ตรงกับชื่อ column จริงใน database ตัวอย่าง
```
// ErpProduct model
type ErpProduct struct {
	ID            int64     `json:"id" gorm:"column:id"`
	CreatedAt     time.Time `json:"created_at" gorm:"column:created_at"`
	UpdatedAt     time.Time `json:"updated_at" gorm:"column:updated_at"`
	ProductCode   string    `json:"product_code" gorm:"column:product_code"`
	ProductName   string    `json:"product_name" gorm:"column:product_name"`
	Description   *string   `json:"description" gorm:"column:description"`
	Price         float64   `json:"price" gorm:"column:price"`
	StockQuantity int64     `json:"stock_quantity" gorm:"column:stock_quantity"`
	Status        string    `json:"status" gorm:"column:status"`
}

func getProductsByLikeCodeOrName(ctx context.Context, db *gorm.DB, productCode string, productName string) ([]ErpProduct, error) {
	var products []ErpProduct
	query := `
		SELECT
			id,
			created_at,
			updated_at,
			product_code,
			product_name,
			description,
			price,
			stock_quantity,
			status
		FROM erp_products
		WHERE product_code ILIKE ? OR product_name ILIKE ?
	`
	likeCode := "%" + productCode + "%"
	likeName := "%" + productName + "%"
	err := db.WithContext(ctx).Raw(query, likeCode, likeName).Scan(&products).Error
	if err != nil {
		return nil, err
	}
	return products, nil
}
```
11. ห้ามเขียน paramiter แบบขั้นบันทัดใหม่แบบนี้
```
func getErpProductsByLikeProductCodeOrProductName(
	ctx context.Context,
	db *gorm.DB,
	productCode string,
	productName string,
) ([]ErpProduct, error)

กับ 
getErpProductsByLikeProductCodeOrProductName(
	c.Request.Context(), 
	db, 
	req.ProductCode, 
	req.ProductName
)
```
จะต้องเขียนแบบนี้เท่านั้น
```
func getErpProductsByLikeProductCodeOrProductName(ctx context.Context, db *gorm.DB, productCode string, productName string) ([]ErpProduct, error)
กับ
getErpProductsByLikeProductCodeOrProductName(c.Request.Context(), db, req.ProductCode, req.ProductName)
```
12. ช่วยเขียน comment เป็นภาษา EN และเขียนเป็น step ให้ด้วย ตัวอย่างที่ผิด
```
func getAuthUserByUsername(ctx context.Context, db *gorm.DB, name string) (*AuthUser, error) {
	var user AuthUser
	query := `
		SELECT
			id,
			created_at,
			updated_at,
			email,
			username,
			status,
			email_verified_at
		FROM auth_user
		WHERE username = ?
		LIMIT 1
	`
	err := db.WithContext(ctx).Raw(query, name).Scan(&user).Error
	if err != nil {
		return nil, err
	}
	
	if user.ID == 0 {
		return nil, gorm.ErrRecordNotFound
	}
	
	return &user, nil
}
```
ตัวอย่างที่ถูก
```
func getAuthUserByUsername(ctx context.Context, db *gorm.DB, name string) (*AuthUser, error) {
	// Step 1: Query
	var user AuthUser
	query := `
		SELECT
			id,
			created_at,
			updated_at,
			email,
			username,
			status,
			email_verified_at
		FROM auth_user
		WHERE username = ?
		LIMIT 1
	`
	err := db.WithContext(ctx).Raw(query, name).Scan(&user).Error
	if err != nil {
		return nil, err
	}
	// Step 2: Check if user is found
	if user.ID == 0 {
		return nil, gorm.ErrRecordNotFound
	}
	// Step 3: Return the data
	return &user, nil
}
```
13. การเขียน output timestamp json string จะต้อง output เป็น format แบบนี้เท่านั้น "2026-10-03 12:33:05" ไม่เอา format "2026-10-03T12:33:05.729348Z" ถ้าเป็น date ก็แสดงเป็น "2026-10-03"
14. ถ้ามีการจะต้องเขียน route บน ไฟล์ ./cmd/api/main
คุณจะต้อง ในล้าง comment
// ai
เพื่อบอกว่า AI เป็นคนเขียน

ถ้าผมเขียนวนไปวนมาช่วยเรียงลำดับความต้องการของผมให้เป็นขั้นตอนที่ถูกต้องและชัดเจนด้วยนะครับ
แล้วบอก AI ปฏิบัติตามกฎและข้อบังคับทุกข้ออย่างเคร่งครัด