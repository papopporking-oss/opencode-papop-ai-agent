package main

import (
	"go-gin-standard/internal/controller/erpcustomersbycustomercodeget"
	"go-gin-standard/internal/controller/erpproductsbylikeproductcodeorproductnameget"
	"go-gin-standard/internal/controller/templatedbqueryget"
	"go-gin-standard/internal/controller/testget"
	"go-gin-standard/internal/controller/testpost"
	"go-gin-standard/internal/database/pgopencode"
	"go-gin-standard/internal/database/pgopencode2"
	"go-gin-standard/internal/database/tspgopencode2"
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
	if db3 := tspgopencode2.Connect(); db3 == nil {
		slog.Error("Failed to connect to tspgopencode2 database")
	} else {
		slog.Info("Connected to tspgopencode2 database successfully")
	}

	router := gin.Default()
	router.GET("/api/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
	router.GET("/api/testget", testget.Handler)
	router.GET("/api/testpost", testpost.Handler)

	// ai
	router.GET("/api/test/ai/template-query", templatedbqueryget.Handler)
	router.GET("/api/test/ai/erp-products-by-like-product-code-or-product-name", erpproductsbylikeproductcodeorproductnameget.Handler)
	router.GET("/api/test/ai/erp-customers-by-customer-code", erpcustomersbycustomercodeget.Handler)

	// listens on 0.0.0.0:8080 by default
	// router.Run()

	// https
	router.RunTLS(":8443", "./ssl/fullchain.pem", "./ssl/privkey.pem")
}
