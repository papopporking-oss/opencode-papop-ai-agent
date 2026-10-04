# Gin GORM API Standard

## Skill Name

`gin-gorm-api-standard`

## Skill File

`.opencode/skills/gin-gorm-api-standard/SKILL.md`

---

## 1. Purpose

This skill defines the mandatory coding standard for implementing Gin API endpoints in Go projects that use GORM with PostgreSQL.

AI Agent MUST follow every rule in this skill strictly when creating, modifying, or refactoring API endpoint code.

These rules are mandatory.

Do not replace, simplify, reinterpret, or partially apply the rules unless the user explicitly requests an exception.

The primary goals are:

1. Keep every API endpoint consistent.
2. Keep HTTP handlers easy to read.
3. Separate database queries into sub functions.
4. Use Raw SQL consistently.
5. Keep SQL aligned with actual database column names.
6. Keep request and response structures predictable.
7. Keep comments and implementation steps consistent.
8. Prevent unnecessary formatting differences between endpoints.

---

# 2. Mandatory API Handler Structure

Every API endpoint MUST have a main handler function with this exact pattern:

```go
func Handler(c *gin.Context) {
	// ...
}
```

`Handler(c *gin.Context)` is the main handler function of the API endpoint.

The handler MUST be responsible for the API flow only.

The standard handler flow MUST contain these five steps in this exact order:

```text
Step 1: Validate query parameter request
Step 2: Validate request
Step 3: Connect to database
Step 4: Main logic
Step 5: Return response
```

Do not reorder these steps unless the endpoint technically requires a different HTTP input mechanism and the user explicitly requests it.

---

# 3. Required Request and Response Structs

Every API endpoint MUST define:

1. `Request`
2. `Response`

Example:

```go
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
```

The names `Request` and `Response` SHOULD be used exactly unless the project architecture explicitly requires otherwise.

---

# 4. Response Format

Every API response MUST follow this structure:

```json
{
  "status": "ok",
  "message": "",
  "key": "value"
}
```

or:

```json
{
  "status": "error",
  "message": "",
  "key": "value"
}
```

The mandatory fields are:

```text
status
message
```

Additional response fields MUST follow the API requirement.

For example:

```go
type Response struct {
	Status  string      `json:"status"`
	Message string      `json:"message"`
	Data    interface{} `json:"data"`
	Version interface{} `json:"version"`
}
```

Successful responses MUST use:

```go
Status: "ok"
```

Error responses MUST use:

```go
Status: "error"
```

Do not create a different response envelope for individual endpoints unless explicitly requested.

---

# 5. Standard Handler Flow

Every handler MUST follow the following structure.

## Step 1: Validate query parameter request

Use Gin request binding.

Example:

```go
var req Request

if err := c.ShouldBindQuery(&req); err != nil {
	c.JSON(http.StatusBadRequest, Response{
		Status:  "error",
		Message: "Invalid request data",
		Data:    nil,
	})
	return
}
```

The validation of query parameters MUST happen before request validation and database connection.

---

## Step 2: Validate request

Create a `validate()` function when additional validation is required.

Example:

```go
func validate() error {
	/*
		github.com/go-playground/validator/v10

		Add custom validation here if needed.
	*/
	return nil
}
```

Then call:

```go
if err := validate(); err != nil {
	c.JSON(http.StatusBadRequest, Response{
		Status:  "error",
		Message: err.Error(),
		Data:    nil,
	})
	return
}
```

Do not connect to the database before request validation has completed.

---

## Step 3: Connect to database

Database connection MUST use the project's database connection model.

The required pattern is:

```go
db := [model connect database].Connect()
```

For example:

```go
db := pgopencode.Connect()
```

Do not create a new database connection directly inside the handler.

Do not use:

```go
gorm.Open(...)
```

inside the API handler.

Do not create a PostgreSQL connection manually inside the API handler.

The database connection model is responsible for establishing and reusing the database connection.

---

# 6. Database Query Rules

All database queries MUST be separated into sub functions.

The `Handler` function MUST NOT contain the actual SQL query.

Correct structure:

```go
user, err := getAuthUserByUsername(c.Request.Context(), db, req.Username)
if err != nil {
	c.JSON(http.StatusNotFound, Response{
		Status:  "error",
		Message: "Not found",
		Data:    nil,
	})
	return
}
```

The query itself belongs in:

```go
func getAuthUserByUsername(...) (...) {
	// ...
}
```

Every database query MUST be implemented as a dedicated sub function.

---

# 7. Database Access

The database object passed to query functions MUST be the database connection returned by:

```go
[model connect database].Connect()
```

The query function MUST receive:

```go
context.Context
```

and:

```go
*gorm.DB
```

Example:

```go
func getAuthUserByUsername(ctx context.Context, db *gorm.DB, name string) (*AuthUser, error) {
	// ...
}
```

The context MUST come from the HTTP request:

```go
c.Request.Context()
```

Example:

```go
user, err := getAuthUserByUsername(c.Request.Context(), db, req.Username)
```

---

# 8. Raw SQL Is Mandatory

All database queries MUST use Raw SQL.

Do not use GORM query-builder methods for endpoint database queries.

Do not use:

```go
db.Where(...)
db.Find(...)
db.First(...)
db.Select(...)
db.Model(...)
db.Table(...)
db.Joins(...)
```

when implementing the required endpoint query.

Use:

```go
db.WithContext(ctx).Raw(query, parameters...).Scan(&struct)
```

The standard pattern is:

```go
err := db.WithContext(ctx).Raw(query, parameter).Scan(&result).Error
if err != nil {
	return nil, err
}
```

For multiple parameters:

```go
err := db.WithContext(ctx).Raw(query, parameter1, parameter2).Scan(&result).Error
if err != nil {
	return nil, err
}
```

---

# 9. SQL Formatting Rules

SQL MUST use uppercase SQL keywords.

Correct:

```sql
SELECT
	id,
	created_at,
	updated_at
FROM auth_user
WHERE username = ?
LIMIT 1
```

Incorrect:

```sql
select
	id,
	created_at
from auth_user
where username = ?
limit 1
```

SQL keywords MUST be uppercase.

Examples of SQL keywords that MUST be uppercase:

```text
SELECT
FROM
WHERE
AND
OR
JOIN
LEFT JOIN
RIGHT JOIN
INNER JOIN
GROUP BY
ORDER BY
LIMIT
OFFSET
INSERT INTO
VALUES
UPDATE
SET
DELETE
AS
DISTINCT
ILIKE
LIKE
IS NULL
IS NOT NULL
COUNT
SUM
AVG
MIN
MAX
```

---

# 10. SQL Column Formatting

When writing the selected columns, format one column per line.

Correct:

```sql
SELECT
	id,
	created_at,
	updated_at,
	email,
	username,
	status,
	email_verified_at
FROM auth_user
```

Do not compress the columns into one line:

```sql
SELECT id, created_at, updated_at, email, username, status, email_verified_at
FROM auth_user
```

The column names MUST match the actual database column names.

Do not invent alternative column names.

Do not automatically convert database column names.

For example, if the real database column is:

```text
created_at
```

SQL MUST use:

```sql
created_at
```

not:

```sql
createdAt
```

---

# 11. Query Struct Rules

Every database query MUST have a dedicated result struct when structured data is returned.

The result struct MUST be declared immediately above the query sub function that uses it.

Example:

```go
// AuthUser model
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
	// ...
}
```

Do not declare the query result struct far away from the query function.

---

# 12. Required Struct Tags

Every database result field MUST contain both:

```go
json:"..."
gorm:"column:..."
```

Example:

```go
ProductCode string `json:"product_code" gorm:"column:product_code"`
```

The `json` name MUST match the API output field.

The `gorm:"column:..."` name MUST match the actual database column name.

Correct:

```go
ProductName string `json:"product_name" gorm:"column:product_name"`
```

Incorrect:

```go
ProductName string `json:"productName" gorm:"column:productName"`
```

when the actual database column is:

```text
product_name
```

---

# 13. Database Struct Type Rules

The Go type SHOULD represent the database type correctly.

Example:

```go
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
```

Nullable database fields SHOULD use pointer types where appropriate.

For example:

```go
Description *string
EmailVerifiedAt *time.Time
```

Non-nullable fields SHOULD use normal Go types.

---

# 14. Query Function Structure

Every query function MUST follow this logical order:

```text
Step 1: Query
Step 2: Check result
Step 3: Return data
```

Comments MUST explicitly identify these steps.

Correct:

```go
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

Do not omit the step comments.

---

# 15. Query Function Example: Multiple Records

For a query returning multiple records:

```go
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

func getErpProductsByLikeProductCodeOrProductName(ctx context.Context, db *gorm.DB, productCode string, productName string) ([]ErpProduct, error) {
	// Step 1: Query
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

	// Step 2: Check if products are found
	if len(products) == 0 {
		return nil, gorm.ErrRecordNotFound
	}

	// Step 3: Return the data
	return products, nil
}
```

---

# 16. Function Parameter Formatting

Function parameters MUST remain on a single line.

Do NOT format function declarations across multiple lines.

Incorrect:

```go
func getErpProductsByLikeProductCodeOrProductName(
	ctx context.Context,
	db *gorm.DB,
	productCode string,
	productName string,
) ([]ErpProduct, error)
```

Correct:

```go
func getErpProductsByLikeProductCodeOrProductName(ctx context.Context, db *gorm.DB, productCode string, productName string) ([]ErpProduct, error)
```

This rule applies to all function declarations.

---

# 17. Function Call Formatting

Function calls MUST also remain on a single line.

Incorrect:

```go
getErpProductsByLikeProductCodeOrProductName(
	c.Request.Context(),
	db,
	req.ProductCode,
	req.ProductName,
)
```

Correct:

```go
getErpProductsByLikeProductCodeOrProductName(c.Request.Context(), db, req.ProductCode, req.ProductName)
```

Do not manually break function arguments across multiple lines.

---

# 18. Handler Database Call Pattern

The standard database call pattern is:

```go
[result], err := [query sub function](c.Request.Context(), db, [parameter...])
if err != nil {
	c.JSON(http.StatusNotFound, Response{
		Status:  "error",
		Message: "Not found",
		[key...]
	})
	return
}
```

Example:

```go
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
```

For multiple records:

```go
products, err := getErpProductsByLikeProductCodeOrProductName(c.Request.Context(), db, req.ProductCode, req.ProductName)
if err != nil {
	c.JSON(http.StatusNotFound, Response{
		Status:  "error",
		Message: "Not found",
		Data:    nil,
	})
	return
}
```

---

# 19. Error Handling

When a query fails or the requested data cannot be found, the handler MUST return an error response according to the endpoint's response structure.

Example:

```go
if err != nil {
	c.JSON(http.StatusNotFound, Response{
		Status:  "error",
		Message: "Not found",
		Data:    nil,
		Version: nil,
	})
	return
}
```

The handler MUST return immediately after sending the error response.

Do not continue executing the endpoint after:

```go
c.JSON(...)
```

for an error condition.

---

# 20. Database Not Found Handling

For single-record queries, the query function SHOULD explicitly check whether a record was found.

Example:

```go
// Step 2: Check if user is found
if user.ID == 0 {
	return nil, gorm.ErrRecordNotFound
}
```

For a slice result:

```go
// Step 2: Check if products are found
if len(products) == 0 {
	return nil, gorm.ErrRecordNotFound
}
```

Use the appropriate existence check for the returned data type.

---

# 21. Timestamp JSON Format

API JSON timestamps MUST use this format:

```text
2026-10-03 12:33:05
```

Do NOT output timestamps in RFC3339 / ISO 8601 format such as:

```text
2026-10-03T12:33:05.729348Z
```

The required timestamp format is:

```text
YYYY-MM-DD HH:mm:ss
```

For example:

```text
2026-10-03 12:33:05
```

Date-only values MUST use:

```text
YYYY-MM-DD
```

Example:

```text
2026-10-03
```

Do not expose the default Go `time.Time` JSON representation when it violates this format.

If custom JSON marshaling or a response DTO is required to achieve this format, implement it explicitly.

---

# 22. SQL Parameterization

SQL parameters MUST use placeholders.

Correct:

```go
query := `
	SELECT
		id,
		username
	FROM auth_user
	WHERE username = ?
`
err := db.WithContext(ctx).Raw(query, name).Scan(&user).Error
```

Do not concatenate user input directly into SQL.

Incorrect:

```go
query := `
	SELECT
		id,
		username
	FROM auth_user
	WHERE username = '` + name + `'
`
```

All user-provided values MUST be passed as query parameters.

---

# 23. LIKE / ILIKE Queries

For partial matching, construct the parameter separately.

Correct:

```go
likeCode := "%" + productCode + "%"
likeName := "%" + productName + "%"

err := db.WithContext(ctx).Raw(query, likeCode, likeName).Scan(&products).Error
```

Do not concatenate user input into the SQL string.

---

# 24. Comments

Comments MUST be written in English.

Comments MUST use the `Step N:` format where the implementation consists of identifiable steps.

Example:

```go
// Step 1: Query
```

```go
// Step 2: Check if user is found
```

```go
// Step 3: Return the data
```

Do not write implementation comments in Thai.

Incorrect:

```go
// ขั้นตอนที่ 1: Query
```

Correct:

```go
// Step 1: Query
```

Comments should explain the purpose of the step, not merely repeat the code.

---

# 25. Required Handler Comments

The main handler MUST use English step comments.

Required structure:

```go
func Handler(c *gin.Context) {
	var req Request

	// Step 1: Validate query parameter request
	// ...

	// Step 2: Validate request
	// ...

	// Step 3: Connect to database
	// ...

	// Step 4: Main logic
	// ...

	// Step 5: Return response
	// ...
}
```

Do not remove the step comments.

---

# 26. Main Handler Example

A standard endpoint SHOULD look like this:

```go
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

// AuthUser model
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

	// Step 5: Return response
	c.JSON(http.StatusOK, Response{
		Status:  "ok",
		Message: "User retrieved successfully",
		Data:    user,
		Version: nil,
	})
}
```

---

# 27. Route Rules

If the API route must be added to:

```text
./cmd/api/main
```

the AI MUST add the comment:

```go
// ai
```

to explicitly indicate that the route was written by AI.

Example:

```go
// ai
router.GET("/users", templatedbqueryget.Handler)
```

The `// ai` comment MUST be placed immediately above the route that AI added.

Do not add `// ai` to unrelated existing routes.

If AI modifies an existing route, also mark the modified route with:

```go
// ai
```

---

# 28. Route Registration

Route registration MUST use the endpoint's `Handler`.

Example:

```go
// ai
router.GET("/users", templatedbqueryget.Handler)
```

Do not put database logic inside the route registration.

Do not put request validation inside the route registration.

Do not put SQL inside the route registration.

---

# 29. Imports

Imports MUST be added only when required.

Typical endpoint imports may include:

```go
import (
	"context"
	"net/http"
	"time"

	"go-gin-standard/internal/database/pgopencode"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)
```

Use the project's actual module path and database model.

Do not invent package paths.

---

# 30. Database Connection Failure

The database connection MUST be validated before executing queries.

If the project's `Connect()` implementation can return `nil`, the handler MUST handle the failure instead of passing a nil database object into a query function.

Example:

```go
// Step 3: Connect to database
db := pgopencode.Connect()
if db == nil {
	c.JSON(http.StatusInternalServerError, Response{
		Status:  "error",
		Message: "Database connection failed",
		Data:    nil,
		Version: nil,
	})
	return
}
```

Use the response fields required by the endpoint.

---

# 31. Do Not Put SQL in Handler

Incorrect:

```go
func Handler(c *gin.Context) {
	// ...

	var user AuthUser
	query := `
		SELECT
			id,
			username
		FROM auth_user
		WHERE username = ?
	`

	err := db.WithContext(c.Request.Context()).Raw(query, req.Username).Scan(&user).Error

	// ...
}
```

Correct:

```go
func getAuthUserByUsername(ctx context.Context, db *gorm.DB, name string) (*AuthUser, error) {
	// Step 1: Query
	var user AuthUser
	query := `
		SELECT
			id,
			username
		FROM auth_user
		WHERE username = ?
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

The handler should only call the query function.

---

# 32. Query Function Naming

Query functions SHOULD clearly describe what they retrieve.

Examples:

```go
getAuthUserByUsername
getErpProductsByLikeProductCodeOrProductName
getUserByID
getOrdersByUserID
getProductByCode
```

Avoid generic names such as:

```go
query
getData
database
fetch
runSQL
```

The function name should communicate the query's purpose.

---

# 33. Query Function Responsibility

Each query sub function SHOULD have one database responsibility.

For example:

```go
getAuthUserByUsername(...)
```

is responsible for retrieving an auth user by username.

Do not combine unrelated database queries into one query function unless the endpoint explicitly requires that behavior.

If an endpoint needs two separate queries, use two separate query functions.

Example:

```go
user, err := getAuthUserByUsername(c.Request.Context(), db, req.Username)
```

and:

```go
version, err := getVersion(c.Request.Context(), db)
```

---

# 34. No Unnecessary Abstractions

Do not introduce unnecessary repositories, services, interfaces, generic query wrappers, or ORM abstractions when the requested endpoint standard is satisfied by a simple query sub function.

Prefer the project's existing pattern:

```text
Handler
  ↓
Connect()
  ↓
Query sub function
  ↓
Raw SQL
  ↓
Result struct
```

Do not make the implementation unnecessarily complex.

---

# 35. Formatting Rules

The generated Go code MUST follow standard Go formatting.

However, the following project-specific formatting rules have priority over normal stylistic preferences:

1. Function declarations MUST keep parameters on one line.
2. Function calls MUST keep parameters on one line.
3. SQL columns MUST be formatted one per line.
4. SQL keywords MUST be uppercase.
5. Step comments MUST be present.
6. Comments MUST be in English.
7. Struct tags MUST include both `json` and `gorm:"column:..."` for database result structs.

Do not automatically reformat these project-specific conventions away.

---

# 36. Complete Implementation Order

When implementing a new API endpoint, AI MUST work through the following order.

## Step 1: Understand the API requirement

Identify:

* HTTP method
* Route
* Request parameters
* Required validation
* Response fields
* Database tables
* Database columns
* Query conditions
* Expected success response
* Expected error response

Do not guess database columns if the required schema information is unavailable.

---

## Step 2: Create Request struct

Create:

```go
type Request struct {
	// ...
}
```

Use the correct Gin binding tags.

For query parameters, use:

```go
form:"field_name"
```

---

## Step 3: Create Response struct

Create:

```go
type Response struct {
	Status  string      `json:"status"`
	Message string      `json:"message"`
	// ...
}
```

All response JSON keys MUST match the API requirement.

---

## Step 4: Create validation

Create:

```go
func validate() error {
	// ...
	return nil
}
```

Implement required custom validation here.

---

## Step 5: Create database result structs

For each query, define the result struct immediately above its query function.

Every field MUST use:

```go
json:"column_name" gorm:"column:column_name"
```

---

## Step 6: Create query sub functions

Each query MUST:

1. Accept `context.Context`.
2. Accept `*gorm.DB`.
3. Use Raw SQL.
4. Use `db.WithContext(ctx).Raw(...)`.
5. Use `.Scan(...)`.
6. Check query errors.
7. Check whether the requested record exists when applicable.
8. Return the result.

---

## Step 7: Implement Handler

Use exactly:

```text
Step 1: Validate query parameter request
Step 2: Validate request
Step 3: Connect to database
Step 4: Main logic
Step 5: Return response
```

---

## Step 8: Add route

If route registration is required in:

```text
./cmd/api/main
```

add:

```go
// ai
```

immediately above the route written or modified by AI.

---

## Step 9: Verify formatting

Before finishing, verify:

* Function parameters are on one line.
* Function calls are on one line.
* SQL keywords are uppercase.
* SQL columns are one per line.
* Database columns match actual column names.
* Raw SQL is used.
* `.WithContext(ctx).Raw(...).Scan(...)` is used.
* Query logic is inside sub functions.
* Query result structs contain `json` tags.
* Query result structs contain `gorm:"column:..."`.
* Comments are in English.
* Handler contains all five required steps.
* Response contains `status` and `message`.
* Timestamp output uses the required format.
* AI-added routes contain `// ai`.

---

# 37. Forbidden Patterns

AI MUST NOT generate the following patterns unless the user explicitly overrides this skill.

## Forbidden: SQL in Handler

```go
query := `SELECT ...`
```

inside `Handler`.

## Forbidden: GORM query builder

```go
db.Where(...)
db.Find(...)
db.First(...)
db.Model(...)
db.Table(...)
```

for the required endpoint query.

## Forbidden: lowercase SQL

```sql
select ...
from ...
where ...
```

## Forbidden: multiline function parameters

```go
func foo(
	ctx context.Context,
	db *gorm.DB,
)
```

## Forbidden: multiline function calls

```go
foo(
	ctx,
	db,
)
```

## Forbidden: Missing GORM column tag

```go
Username string `json:"username"`
```

Correct:

```go
Username string `json:"username" gorm:"column:username"`
```

## Forbidden: Missing JSON tag

```go
Username string `gorm:"column:username"`
```

Correct:

```go
Username string `json:"username" gorm:"column:username"`
```

## Forbidden: Non-English implementation comments

```go
// ขั้นตอนที่ 1
```

Correct:

```go
// Step 1: Query
```

## Forbidden: ISO/RFC3339 timestamp output

```text
2026-10-03T12:33:05.729348Z
```

Required:

```text
2026-10-03 12:33:05
```

## Forbidden: Missing `// ai` route marker

If AI adds or modifies a route in:

```text
./cmd/api/main
```

it MUST include:

```go
// ai
```

---

# 38. Final Compliance Checklist

Before considering an API implementation complete, AI MUST verify every item below.

### Handler

* [ ] `func Handler(c *gin.Context)` exists.
* [ ] Handler contains Step 1.
* [ ] Handler contains Step 2.
* [ ] Handler contains Step 3.
* [ ] Handler contains Step 4.
* [ ] Handler contains Step 5.
* [ ] Step comments are written in English.

### Request

* [ ] `Request` struct exists.
* [ ] Query parameters use appropriate Gin binding tags.
* [ ] Required fields have appropriate validation.

### Response

* [ ] `Response` struct exists.
* [ ] `status` exists.
* [ ] `message` exists.
* [ ] Additional keys match the API requirement.
* [ ] Success uses `"ok"`.
* [ ] Error uses `"error"`.

### Database

* [ ] Database connection uses `[model connect database].Connect()`.
* [ ] Handler does not create a database connection directly.
* [ ] Database queries are separated into sub functions.
* [ ] Query functions receive `context.Context`.
* [ ] Query functions receive `*gorm.DB`.
* [ ] Raw SQL is used.
* [ ] `db.WithContext(ctx).Raw(...).Scan(...)` is used.
* [ ] User input is parameterized.
* [ ] Query result structs are declared above their query functions.
* [ ] Every database result field has `json:"..."`.
* [ ] Every database result field has `gorm:"column:..."`.

### SQL

* [ ] SQL keywords are uppercase.
* [ ] Columns are one per line.
* [ ] Column names match the real database column names.
* [ ] No SQL is directly embedded in `Handler`.
* [ ] No unnecessary GORM query builder is used.

### Formatting

* [ ] Function parameters remain on one line.
* [ ] Function calls remain on one line.
* [ ] Code follows Go formatting standards.
* [ ] Project-specific formatting rules are preserved.

### Comments

* [ ] Comments are in English.
* [ ] Query functions contain Step 1 / Step 2 / Step 3 comments.
* [ ] Handler contains Step 1 / Step 2 / Step 3 / Step 4 / Step 5 comments.

### Timestamp

* [ ] Datetime JSON output is `YYYY-MM-DD HH:mm:ss`.
* [ ] Date-only JSON output is `YYYY-MM-DD`.
* [ ] RFC3339 / ISO 8601 output is not exposed where this standard applies.

### Route

* [ ] AI-added route in `./cmd/api/main` has `// ai`.
* [ ] AI-modified route in `./cmd/api/main` has `// ai`.

---

# 39. Strict Instruction to AI Agent

The AI Agent MUST treat this document as a mandatory coding contract.

When generating or modifying a Gin + GORM API endpoint:

1. Follow every applicable rule in this skill.
2. Do not omit required steps for convenience.
3. Do not replace Raw SQL with GORM query-builder syntax.
4. Do not place SQL directly inside `Handler`.
5. Do not change SQL capitalization conventions.
6. Do not change function parameter formatting conventions.
7. Do not change function call formatting conventions.
8. Do not omit `json` or `gorm:"column:..."` tags from database result structs.
9. Do not omit Step comments.
10. Do not write implementation comments in languages other than English.
11. Do not output timestamps in an unsupported format.
12. Do not add or modify routes without adding `// ai` as required.
13. Do not invent database column names.
14. Do not guess database schema information when the actual schema is required for correctness.
15. Preserve the existing project architecture and naming conventions where they do not conflict with this skill.

If multiple possible implementations exist, choose the implementation that satisfies the maximum number of rules in this skill while keeping the code simple and consistent with the provided examples.

The AI Agent MUST perform the Final Compliance Checklist before presenting the implementation as complete.

A solution that violates any mandatory rule MUST be corrected before it is considered complete.
