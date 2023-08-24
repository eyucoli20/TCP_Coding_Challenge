// document.addEventListener("DOMContentLoaded", () => {
//   const boxes = document.querySelectorAll(".box");

//   const changeBoxColor = (box) => {
//     box.style.backgroundColor = getRandomColor();
//     box.style.borderColor = getRandomColor();
//   };

//   const getRandomColor = () => {
//     const letters = "0123456789ABCDEF";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   };

//   document.getElementById("changeBox1").addEventListener("click", () => {
//     changeBoxColor(boxes[0]);
//   });

//   document.getElementById("changeBox2").addEventListener("click", () => {
//     changeBoxColor(boxes[1]);
//   });

//   document.getElementById("changeBox3").addEventListener("click", () => {
//     changeBoxColor(boxes[2]);
//   });

//   document.getElementById("changeAll").addEventListener("click", () => {
//     boxes.forEach((box) => {
//       changeBoxColor(box);
//     });
//   });

//   document.getElementById("hideBox1").addEventListener("click", () => {
//     boxes[0].style.display = "none";
//   });

//   document.getElementById("hideBox2").addEventListener("click", () => {
//     boxes[1].style.display = "none";
//   });

//   document.getElementById("hideBox3").addEventListener("click", () => {
//     boxes[2].style.display = "none";
//   });

//   document.getElementById("hideAll").addEventListener("click", () => {
//     boxes.forEach((box) => {
//       box.style.visibility = "hidden";
//     });
//   });

//   document.getElementById("resetColors").addEventListener("click", () => {
//     boxes.forEach((box, index) => {
//       box.style.backgroundColor = "";
//       box.style.borderColor = "black";
//     });
//   });

//   document.getElementById("showAll").addEventListener("click", () => {
//     boxes.forEach((box) => {
//       box.style.display = "block";
//       box.style.visibility = "visible";
//     });
//   });
// });



document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");

    const defaultColors = [
      { backgroundColor: "red", borderColor: "black" }, // Box 1 defaults
      { backgroundColor: "blue", borderColor: "#00ff00" }, // Box 2 defaults
      { backgroundColor: " #2FFF74", borderColor: "#0000ff" }  // Box 3 defaults
    ];

    const changeBoxColor = (box) => {
      box.style.backgroundColor = getRandomColor();
      box.style.borderColor = getRandomColor();
    };

    const getRandomColor = () => {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    const setDefaultBoxStyles = (box, index) => {
      box.style.backgroundColor = defaultColors[index].backgroundColor;
      box.style.borderColor = defaultColors[index].borderColor;
    };

    boxes.forEach((box, index) => {
      setDefaultBoxStyles(box, index);
    });

    document.getElementById("changeBox1").addEventListener("click", () => {
      changeBoxColor(boxes[0]);
    });

    document.getElementById("changeBox2").addEventListener("click", () => {
      changeBoxColor(boxes[1]);
    });

    document.getElementById("changeBox3").addEventListener("click", () => {
      changeBoxColor(boxes[2]);
    });

    document.getElementById("changeAll").addEventListener("click", () => {
      boxes.forEach((box) => {
        changeBoxColor(box);
      });
    });

    document.getElementById("hideBox1").addEventListener("click", () => {
      boxes[0].style.display = "none";
    });

    document.getElementById("hideBox2").addEventListener("click", () => {
      boxes[1].style.display = "none";
    });

    document.getElementById("hideBox3").addEventListener("click", () => {
      boxes[2].style.display = "none";
    });

    document.getElementById("hideAll").addEventListener("click", () => {
      boxes.forEach((box) => {
        box.style.visibility = "hidden";
      });
    });

    document.getElementById("resetColors").addEventListener("click", () => {
      boxes.forEach((box, index) => {
        setDefaultBoxStyles(box, index);
      });
    });

    document.getElementById("showAll").addEventListener("click", () => {
      boxes.forEach((box) => {
        box.style.display = "block";
        box.style.visibility = "visible";
      });
    });
  });