package Interfaces

import "fmt"

type Stringer interface {
	String() string
}

type Book struct {
	Title  string
	Author string
}

func main() {
	fmt.Println("Hello World!")
	book := Book{
		Title:  "Hello World!",
		Author: "GO",
	}

	a := Book.String(book)

	fmt.Println(a)
}

func (b Book) String() string {
	return fmt.Sprintf("Book: %s by %s", b.Title, b.Author)
}
