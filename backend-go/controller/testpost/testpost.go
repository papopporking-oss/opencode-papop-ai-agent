package testpost

import (
  "net/http"
  "github.com/gin-gonic/gin"

  "go-gin-standard/service/service2"
)

func TestPost(c *gin.Context) {
  c.JSON(http.StatusOK, gin.H{
    "method": "POST", 
    "data": service2.Hello(),
  })
}