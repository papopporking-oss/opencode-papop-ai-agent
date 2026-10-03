package main

import (
	"go-gin-standard/controller/testget"
    "go-gin-standard/controller/testpost"

	"github.com/gin-gonic/gin"
)

func main() {
    router := gin.Default()
    router.GET("/ping", func(c *gin.Context) {
        c.JSON(200, gin.H{
        "message": "pong",
        })
    })
    router.GET("/testget", testget.TestGet)
    router.GET("/testpost", testpost.TestPost)
    // listens on 0.0.0.0:8080 by default
    // router.Run()
    	// HTTPS
	router.RunTLS(":8443","./ssl/fullchain.pem","./ssl/privkey.pem",)
}