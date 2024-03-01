package app

import (
	"example/srq/backend/internal/transport/rest"

	"github.com/gin-gonic/gin"
)

// run all programs
func App() {
	r := gin.Default()

	r.GET("/", rest.Ping)

	r.Run()
}
