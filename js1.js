<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8"/>
    <title>Variables: Task 1</title>
    <style>
      p {
        color: purple;
        margin: 0.5em 0;
      }

      * {
        box-sizing: border-box;
      }
    </style>
    <link rel="stylesheet" href="../styles.css" />
  </head>

  <body>

    <section class="preview">



    </section>

  </body>
  <script>
 let myName="life";

    // Don't edit the code below here!

    const section = document.querySelector('section');

    const para1 = document.createElement('p');
    para1.textContent = myName;
    const para2 = document.createElement('p');
    para2.textContent = myAge;
    section.appendChild(para1);
    section.appendChild(para2);
  </script>

</html>