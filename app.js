const veysel =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt amet eaque beatae doloremque, facere quas totam excepturi magni quis. Quia vel repudiandae, atque ad cumque tempora? Soluta error illo repellendus? Optio perspiciatis vero unde itaque harum facere nihil illum molestiae, hic quibusdam ipsam, at deserunt sapiente explicabo magni enim debitis nemo dignissimos. Sit adipisci nisi facilis magni reiciendis facere. Quam, magnam maiores. Perferendis impedit repellendus et minima? Voluptatem, magni sapiente maxime unde soluta veniam quidem consequuntur temporibus facilis. Quisquam culpa perspiciatis nemo minima, hic sequi velit corrupti doloremque tempore, enim aliquid vero adipisci minus eum praesentium. Sunt itaque reiciendis eos. Nobis maxime mollitia reiciendis incidunt ipsum! Pariatur iure ab deleniti doloribus tempore minus modi, cumque velit, hic deserunt qui exercitationem quidem saepe ducimus! Blanditiis quos minima suscipit nobis! A laudantium dolorem consequatur";
const char = veysel
  .toLowerCase()
  .replace(",", "")
  .replace(".", "")
  .replace(" ", "")
  .split("");
// console.log(char);
let harf = [];
let harf2 = [];
for (i = 0; i < char.length; i++) {
  let sayac = 0;
  for (j = 0; j < char.length; j++) {
    if (char[i] === char[j]) {
      sayac++;
    }
  }

  if (harf.includes(char[i]) === false) {
    harf.push(char[i]);
    harf2.push(sayac);
  }
}
for (let x = 0; x < harf.length; x++) {
  console.log(`${harf[x]} harfinden ${harf2[x]} adet bulunmaktadır.`);
}
