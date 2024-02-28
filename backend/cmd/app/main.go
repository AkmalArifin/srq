package main

import (
	"example/srq/backend/internal/config"

	"github.com/gin-gonic/gin"
)

func init() {
	config.GetEnvVariables()
}

func main() {
	r := gin.Default()
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
	r.Run()
}
