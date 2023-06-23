package main

import (
	"bufio"
	"fmt"
	"image/color"
	"log"
	"os"
	"sort"

	"github.com/disintegration/imaging"
	cl "github.com/fatih/color"
)

type ColorData struct {
	Color  string
	Length int
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	fmt.Print("Enter the path to image: ")
	path, _ := reader.ReadString('\n')
	path = path[:len(path)-1]

	colors, err := findColors(path, 5)

	if err != nil {
		log.Fatal(err)
		return
	}

	if len(colors) == 0 {
		log.Fatal(err)
		return
	}

	fmt.Println("Most frequent colors: ")
	for _, c := range colors {
		displayColor(c.Color)
	}

}

func findColors(path string, length int) ([]ColorData, error) {
	img, err := imaging.Open(path)

	if err != nil {
		return nil, err
	}

	colorMap := make(map[string]int)

	bounds := img.Bounds()

	for y := bounds.Min.Y; y < bounds.Max.Y; y++ {
		for x := bounds.Min.X; x < bounds.Max.X; x++ {
			px := img.At(x, y)
			r, g, b, _ := px.RGBA()
			rgb := color.RGBA{R: uint8(r >> 8), G: uint8(g >> 8), B: uint8(b >> 8), A: 255}
			hex := convertToHex(rgb)
			colorMap[hex]++
		}
	}

	colorsInfo := make([]ColorData, 0, len(colorMap))

	for c, l := range colorMap {
		colorsInfo = append(colorsInfo, ColorData{Color: c, Length: l})
	}

	sort.Slice(colorsInfo, func(i, j int) bool {
		return colorsInfo[i].Length > colorsInfo[j].Length
	})

	if len(colorsInfo) > length {
		colorsInfo = colorsInfo[:length]
	}

	return colorsInfo, nil

}

func displayColor(hexColor string, length ...int) {
	colorHex := cl.New(cl.BgBlack, cl.FgWhite).Add().SprintfFunc()
	if length != nil {
		fmt.Printf("Color: %s, Length: %d\n", colorHex(hexColor), length)
	} else {
		fmt.Println(colorHex(hexColor))
	}
}

func convertToHex(color color.RGBA) string {
	return fmt.Sprintf("#%02X%02X%02X", color.R, color.G, color.B)
}
