import { HoverEffect } from "../../ui/CardHover";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8 mt-80 xl:mt-0 2xl:mt-0">
      <h1 className="text-white text-[4rem] text-center" >Skills</h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Html",
    link: "https://abhaypanchal.vercel.app/assets/html-gk0t6tLt.png",
  },
  {
    title: "Css",
    link: "https://abhaypanchal.vercel.app/assets/css-3-Gy62SVAX.png",
  },
  {
    title: "JavaScript",
    link: "https://abhaypanchal.vercel.app/assets/js-bumRY2k2.png",
  },
  {
    title: "React",
    link: "https://abhaypanchal.vercel.app/assets/react-h3aPdYU7.svg",
  },
  {
    title: "Tailwind",
    link: "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%20128%20128'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%2338bdf8'%20d='M64.004%2025.602c-17.067%200-27.73%208.53-32%2025.597c6.398-8.531%2013.867-11.73%2022.398-9.597c4.871%201.214%208.352%204.746%2012.207%208.66C72.883%2056.629%2080.145%2064%2096.004%2064c17.066%200%2027.73-8.531%2032-25.602c-6.399%208.536-13.867%2011.735-22.399%209.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738zM32.004%2064c-17.066%200-27.73%208.531-32%2025.602C6.402%2081.066%2013.87%2077.867%2022.402%2080c4.871%201.215%208.352%204.746%2012.207%208.66c6.274%206.367%2013.536%2013.738%2029.395%2013.738c17.066%200%2027.73-8.53%2032-25.597c-6.399%208.531-13.867%2011.73-22.399%209.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128%2071.371%2047.868%2064%2032.004%2064zm0%200'/%3e%3c/svg%3e",
  },
  {
    title: "Sass",
    link: "https://abhaypanchal.vercel.app/assets/sass-t2eWRqro.svg",
  },
  
  {
    title: "Git",
    link: "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%20128%20128'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23F34F29'%20d='M124.737%2058.378L69.621%203.264c-3.172-3.174-8.32-3.174-11.497%200L46.68%2014.71l14.518%2014.518c3.375-1.139%207.243-.375%209.932%202.314c2.703%202.706%203.461%206.607%202.294%209.993l13.992%2013.993c3.385-1.167%207.292-.413%209.994%202.295c3.78%203.777%203.78%209.9%200%2013.679a9.673%209.673%200%200%201-13.683%200a9.677%209.677%200%200%201-2.105-10.521L68.574%2047.933l-.002%2034.341a9.708%209.708%200%200%201%202.559%201.828c3.778%203.777%203.778%209.898%200%2013.683c-3.779%203.777-9.904%203.777-13.679%200c-3.778-3.784-3.778-9.905%200-13.683a9.65%209.65%200%200%201%203.167-2.11V47.333a9.581%209.581%200%200%201-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056%2020.333L3.264%2058.123a8.133%208.133%200%200%200%200%2011.5l55.117%2055.114c3.174%203.174%208.32%203.174%2011.499%200l54.858-54.858a8.135%208.135%200%200%200-.001-11.501z'/%3e%3c/svg%3e",
  },
  
  {
    title: "Java",
    link: "data:image/svg+xml,%3c?xml%20version=%271.0%27%20encoding=%27utf-8%27?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width=%27800px%27%20height=%27800px%27%20viewBox=%270%200%2032%2032%27%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath%20d=%27M16.0497%208.44062C22.6378%203.32607%2019.2566%200%2019.2566%200C19.7598%205.28738%2013.813%206.53583%2012.2189%2010.1692C11.1312%2012.6485%2012.9638%2014.8193%2016.0475%2017.5554C15.7749%2016.9494%2015.3544%2016.3606%2014.9288%2015.7645C13.4769%2013.7313%2011.9645%2011.6132%2016.0497%208.44062Z%27%20fill=%27%23E76F00%27/%3e%3cpath%20d=%27M17.1015%2018.677C17.1015%2018.677%2019.0835%2017.0779%2017.5139%2015.3008C12.1931%209.27186%2023.3333%206.53583%2023.3333%206.53583C16.5317%209.8125%2017.5471%2011.7574%2019.2567%2014.1202C21.0871%2016.6538%2017.1015%2018.677%2017.1015%2018.677Z%27%20fill=%27%23E76F00%27/%3e%3cpath%20d=%27M22.937%2023.4456C29.0423%2020.3258%2026.2195%2017.3278%2024.2492%2017.7317C23.7662%2017.8305%2023.5509%2017.9162%2023.5509%2017.9162C23.5509%2017.9162%2023.7302%2017.64%2024.0726%2017.5204C27.9705%2016.1729%2030.9682%2021.4949%2022.8143%2023.6028C22.8143%2023.6029%2022.9088%2023.5198%2022.937%2023.4456Z%27%20fill=%27%235382A1%27/%3e%3cpath%20d=%27M10.233%2019.4969C6.41312%2018.9953%2012.3275%2017.6139%2012.3275%2017.6139C12.3275%2017.6139%2010.0307%2017.4616%207.20592%2018.8043C3.86577%2020.3932%2015.4681%2021.1158%2021.474%2019.5625C22.0984%2019.1432%2022.9614%2018.7798%2022.9614%2018.7798C22.9614%2018.7798%2020.5037%2019.2114%2018.0561%2019.4145C15.0612%2019.6612%2011.8459%2019.7093%2010.233%2019.4969Z%27%20fill=%27%235382A1%27/%3e%3cpath%20d=%27M11.6864%2022.4758C9.55624%2022.2592%2010.951%2021.2439%2010.951%2021.2439C5.43898%2023.0429%2014.0178%2025.083%2021.7199%2022.8682C20.9012%2022.5844%2020.3806%2022.0653%2020.3806%2022.0653C16.6163%2022.7781%2014.441%2022.7553%2011.6864%2022.4758Z%27%20fill=%27%235382A1%27/%3e%3cpath%20d=%27M12.6145%2025.6991C10.486%2025.4585%2011.7295%2024.7474%2011.7295%2024.7474C6.72594%2026.1222%2014.7729%2028.9625%2021.1433%2026.2777C20.0999%2025.8787%2019.3528%2025.4181%2019.3528%2025.4181C16.5111%2025.9469%2015.1931%2025.9884%2012.6145%2025.6991Z%27%20fill=%27%235382A1%27/%3e%3cpath%20d=%27M25.9387%2027.3388C25.9387%2027.3388%2026.8589%2028.0844%2024.9252%2028.6612C21.2481%2029.7566%209.62093%2030.0874%206.39094%2028.7049C5.22984%2028.2082%207.40723%2027.5189%208.09215%2027.3742C8.80646%2027.2219%209.21466%2027.2503%209.21466%2027.2503C7.9234%2026.3558%200.868489%2029.0067%205.63111%2029.7659C18.6195%2031.8372%2029.3077%2028.8331%2025.9387%2027.3388Z%27%20fill=%27%235382A1%27/%3e%3cpath%20d=%27M28%2028.9679C27.7869%2031.6947%2018.7877%2032.2683%2012.9274%2031.8994C9.10432%2031.6583%208.33812%2031.0558%208.32691%2031.047C11.9859%2031.6402%2018.1549%2031.7482%2023.1568%2030.8225C27.5903%2030.0016%2028%2028.9679%2028%2028.9679Z%27%20fill=%27%235382A1%27/%3e%3c/svg%3e",
  },
  
  {
    title: "Firebase",
    link: "https://imgs.search.brave.com/Rt7274I9pYiuAKtGuRuv7yYFo0b4DE7bhJRAv4UIxmc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL0YvZmlyZWJh/c2UtbG9nby00MDJG/NDA3RUUwLXNlZWts/b2dvLmNvbS5wbmc",
  },
];