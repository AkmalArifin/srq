package app

import (
	"example/srq/backend/internal/config"
	"example/srq/backend/internal/transport/rest"

	"github.com/gin-gonic/gin"
)

// run all programs
func App() {
	r := gin.Default()

	config.SetCORS(r)

	r.GET("/", rest.Ping)
	r.POST("/login", rest.Login)

	r.Run()
}
