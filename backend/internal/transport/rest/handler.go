package rest

import (
	"github.com/gin-gonic/gin"
)

func Ping(c *gin.Context) {
	c.JSON(200, gin.H{
		"message": "pong",
	})
}

func Login(c *gin.Context) {
	c.JSON(200, gin.H{
		"login": "login",
	})
}
