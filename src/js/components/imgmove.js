export const imgmove = () => {
  let blocks = document.querySelectorAll(".img-move-hover");

  if (blocks.length) {
    for (let block of blocks) {
      let img = block.querySelector(".img-move");

      block.addEventListener("mousemove", function (e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;

        if (window.innerWidth > 768) {
          img.style.transform = "translate(" + x * 4 + "%,-" + y * 4 + "%)";
        }

        setTimeout(() => {
          img.classList.remove("img-move_duration");
        }, 500);
      });

      block.addEventListener("mouseleave", function (e) {
        if (window.innerWidth > 768) {
          img.style.transform = "translate(0)";
        }

        setTimeout(() => {
          img.classList.add("img-move_duration");
        }, 550);
      });
    }
  }

  /*     const tipHover = document.querySelectorAll('.img-cursor-hover');

    for (let tip of tipHover ) {
        tip.onmousemove = (e) => {
            var x = e.clientX;
            var y = e.clientY;

            console.log('', (+tip.offsetLeft) + "," + (+tip.offsetTop));

            document.querySelector(".tooltip").style.left = x / 100 + "rem";
            document.querySelector(".tooltip").style.top = y / 100 + "rem";
        }
    } */

  const tooltipHover = document.querySelectorAll(".img-cursor-hover");

  if (tooltipHover.length) {
    for (let block of tooltipHover) {
      block.addEventListener(
        "mousemove",
        (ev) => {
          const rect = block.getBoundingClientRect();

          //console.log(` + ${ev.clientX - rect.left}:${ev.clientY - rect.top}    ----------    ${ev.pageX - div.offsetLeft}:${ev.pageY - div.offsetTop}`);

          //document.querySelector(".tooltip").style.left = (ev.clientX - rect.left - 10) / 10 + "rem";
          //document.querySelector(".tooltip").style.top = (ev.clientY - rect.top - 25) / 10 + "rem";

          //   block.querySelector(".tooltip").style.transform =
          //     "translate(" +
          //     (ev.clientX - rect.left - 10) / 10 +
          //     "rem" +
          //     "," +
          //     (ev.clientY - rect.top - 25) / 10 +
          //     "rem" +
          //     ")";

          block.querySelector(".tooltip").style.transform =
            "translate(" +
            (ev.clientX - rect.left + 10) +
            "px" +
            "," +
            (ev.clientY - rect.top + 30) +
            "px" +
            ")";
        },
        {
          capture: true,
        }
      );
    }
  }

  const appearBlocks = document.querySelectorAll(".js-appear");

  window.addEventListener("scroll", function () {
    appear();
  });

  appear();

  function appear() {
    for (let block of appearBlocks) {
      let position = block.getBoundingClientRect().y;

      if (position < window.innerHeight * 0.9) {
        block.classList.remove("appear");
      }
    }
  }
};
