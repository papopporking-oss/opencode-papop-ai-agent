package main

import (
	"go-gin-standard/internal/controller/erpcustomersbycustomercodeget"
	"go-gin-standard/internal/controller/erpproductsbylikeproductcodeorproductnameget"
	"go-gin-standard/internal/controller/templatedbqueryget"
	"go-gin-standard/internal/controller/testget"
	"go-gin-standard/internal/controller/testpost"
	"go-gin-standard/internal/database/pgopencode"
	"go-gin-standard/internal/database/pgopencode2"
	"log/slog"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {

	// Load environment variables from ./.env
	if err := godotenv.Load("./.env"); err != nil {
		slog.Error("Error loading .env file", "error", err)
		return
	}

	// Connect database
	if db1 := pgopencode.Connect(); db1 == nil {
		slog.Error("Failed to connect to pgopencode database")
	} else {
		slog.Info("Connected to pgopencode database successfully")
	}

	if db2 := pgopencode2.Connect(); db2 == nil {
		slog.Error("Failed to connect to pgopencode2 database")
	} else {
		slog.Info("Connected to pgopencode2 database successfully")
	}

	router := gin.Default()
	router.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
	router.GET("/testget", testget.Handler)
	router.GET("/testpost", testpost.Handler)

	// ai
	router.GET("/ai/template-query", templatedbqueryget.Handler)
	router.GET("/ai/erp-products-by-like-product-code-or-product-name", erpproductsbylikeproductcodeorproductnameget.Handler)
	router.GET("/ai/erp-customers-by-customer-code", erpcustomersbycustomercodeget.Handler)

	// listens on 0.0.0.0:8080 by default
	// router.Run()

	// https
	router.RunTLS(":8443", "./ssl/fullchain.pem", "./ssl/privkey.pem")
}
