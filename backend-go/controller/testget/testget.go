package testget

import (
  "net/http"
  "github.com/gin-gonic/gin"

  "go-gin-standard/service/service1"
)

func TestGet(c *gin.Context) {
  c.JSON(http.StatusOK, gin.H{
    "method": "GET", 
    "data": service1.Hello(),
  })
}