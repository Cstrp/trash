package main

import (
	"fmt"
)

func main() {
	i := 0

	//LOOP: // Infinity loop
	//	fmt.Println(i)
	//	i++
	//	goto LOOP

	fmt.Println("Starting...")

	for i < 10 {
		fmt.Println(i)
		i++
	}

	fmt.Println("Done!")
}
