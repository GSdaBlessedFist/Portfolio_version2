import {useEffect,useRef} from "react";
import gsap from "gsap";
import styles from "./reactiveLettering.module.scss";




export default function ReactiveLettering(props){
	
  const panelsRef = useRef([]);
  panelsRef.current = [];
  var panels = panelsRef.current;
  function addPanelsRefs(el){
    if(el && !panels.includes(el)){
      panels.push(el);
    }
  }

  useEffect(()=>{
    const tl = gsap.timeline({yoyo:true});

    tl.from(panels,{
      transformOrigin: "center center",
      transform: "scale(.95)",
      stagger:{
        each: ".1",
        from: "random"
      },
      repeat:-1,
      ease: "linear"
    })
  },[])

	return (<>
		
    <svg width={600} height={200} xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <clipPath id="a">
        <text y={150}>{"Mask"}</text>
      </clipPath>
    </defs>
    <g transform="translate(1 .2)" strokeWidth={1.5} clipPath="url(#a)">
      <rect
        width={600}
        height={200}
        x={-1}
        y={-0.2}
        rx={0}
        ry={0}
        fillRule="evenodd"
      />
      <g stroke="#000">
        <path
          className={styles.panel}
          ref={addPanelsRefs}
          d="m58.6 2.7 49.1-10.5-1.8 204.8-46.4 4.7Z"
          fill="#a5a5a5"
        />
        <path
          className={styles.panel}
          ref={addPanelsRefs}
          d="m99.4-43.5 38.5-2.5-8.9 288.1-47.8-5.1Z"
          fill="#515151"
        />
        <path
          className={styles.panel}
          ref={addPanelsRefs}
          d="m359.5 235.4-36.4 8.6 1-282.5 48.2-1z"
          fill="#787878"
        />
        <path
          className={styles.panel}
          ref={addPanelsRefs}
          d="m469.8-44.7 56.2-1 11.1 287.4-72.1-2.9zM411.7-41.1l38.5-2.5-8.9 288.1-47.8-5.1z"
          fill="#515151"
        />
        <path
          className={styles.panel}
          ref={addPanelsRefs}
          d="m438.7-39.3 26.4 5.9 9 268-48.2.9z"
          fill="#787878"
        />
        <path
          className={styles.panel}
          ref={addPanelsRefs}
          d="m235.4-32.9 39.6 1.4-2.7 137.5H236z"
          fill="#7b7b7b"
        />
        <path
          className={styles.panel}
          ref={addPanelsRefs}
          d="m34.6-29.4 51.2-.6-6 186.2-49.6.9Z"
          fill="#787878"
        />
        <path
          className={styles.panel}
          ref={addPanelsRefs}
          d="m455.3 184.4 28.5-8.2-.3 73.8-32.3-2.4z"
          fill="#7b7b7b"
        />
        <path
          className={styles.panel}
          ref={addPanelsRefs}
          d="m353.4 203.6 42.3-5.7-1.2 52.3-43.5-1.5z"
          fill="#a5a5a5"
        />
        <path
          className={styles.panel}
          ref={addPanelsRefs}
          d="M515.9 58.3 544 49l1.7 187-29.5 7.2z"
          fill="#787878"
        />
        <path
          className={styles.panel}
          ref={addPanelsRefs}
          d="m154 241.2-28.1 3.9-1.8-78.4 29.5-3z"
          fill="#7b7b7b"
        />
        <path
          className={styles.panel}
          ref={addPanelsRefs}
          d="m199.8 19.4 25.3-4.2 2.2 129.5-36.5 1.1z"
          fill="#787878"
        />
        <path
          className={styles.panel}
          ref={addPanelsRefs}
          d="m219.9 191.3 20.5-.6 2.5 61.8-37 .9zM302-58.7l7.7 122.6 27.7 2.6 3-133z"
          fill="#515151"
        />
        <path
          className={styles.panel}
          ref={addPanelsRefs}
          d="m541.6-49.7 45.9-2 7.3 305.6-68.1-1.6zM178.7-44.6l56.2-1L246 241.7l-72.1-2.9ZM273.7-40.9l46.7 5 1.8 271.7-56.3 1.2zM390.5-43.5l38.5-2.6-8.9 288.2-47.8-5.1zM33.3 162.6l47.3-.6 4.1 81.2-60-.9z"
          fill="#d8d8d8"
        />
        <path
          className={styles.panel}
          ref={addPanelsRefs}
          d="m515.2-34.5 28.1-4L545 40l-29.5 3z"
          fill="#d8d8d8"
        />
        <path
          className={styles.panel}
          ref={addPanelsRefs}
          d="m147.6-39.3 26.4 6 9 267.9-48.2.9z"
          fill="#aeaeae"
        />
        <path
          className={styles.panel}
          ref={addPanelsRefs}
          d="m153.2 148.5-28.1 9.2-1.8-187 29.5-7.3z"
          fill="#d8d8d8"
        />
        <path
          className={styles.panel}
          ref={addPanelsRefs}
          d="m23.1 11.7 29 .5-3.8 167.1-32 6.8Z"
          fill="#515151"
        />
        <path
          className={styles.panel}
          ref={addPanelsRefs}
          d="m302.6 139.7 28.2 6.8 3.8 114.7-32.8-.7z"
          fill="#7b7b7b"
        />
        <path
          className={styles.panel}
          ref={addPanelsRefs}
          d="m556 20.2 28.1-3.7 1.1 78.4-29.5 2.8z"
          fill="#a5a5a5"
        />
        <path
          className={styles.panel}
          ref={addPanelsRefs}
          d="m575.8 100.5 28.2-9 .2 187-29.6 7z"
          fill="#515151"
        />
        <path
          className={styles.panel}
          ref={addPanelsRefs}
          d="m172 53.9 28.1-3.7 1.1 78.4-29.5 2.8z"
          fill="#787878"
        />
        <path
          className={styles.panel}
          ref={addPanelsRefs}
          d="M-6.3-40.9 40.3-36l-3.7 271.8-50.8 1.2zM237.2 112.3l33.6-.8-.1 131.7-37.6 3.5zM459.8 6.5l25.8.1.4 161.4-31 8.2zM351.3-2l49.1-10.4-1.8 204.8-46.4 4.7Z"
          fill="#aeaeae"
        />
        <path
          className={styles.panel}
          ref={addPanelsRefs}
          d="M70.4 56.7 98.1 61l.6 62.5-34-5.2Z"
          fill="#d8d8d8"
        />
        <path
          className={styles.panel}
          ref={addPanelsRefs}
          d="m506 144.6 18.4 1.2.9 68.5-26.1 1.7zM576.3-12.3l28.2-9 .2 187-29.6 7z"
          fill="#aeaeae"
        />
        <path
          className={styles.panel}
          ref={addPanelsRefs}
          d="m458.9 130.9-47.8 4.8v13.8l51.4-1.7z"
          fill="#a5a5a5"
        />
        <path
          className={styles.panel}
          ref={addPanelsRefs}
          d="m441.4 70.3-47.8 4.8V89l51.4-1.7z"
          fill="#d8d8d8"
        />
        <path
          className={styles.panel}
          ref={addPanelsRefs}
          d="m43.1 188.4 49.3-5v-14.3l-53 1.7z"
          fill="#a5a5a5"
        />
        <path
          className={styles.panel}
          ref={addPanelsRefs}
          d="m39.1 144.8 49.3-5v-14.3l-53 1.7z"
          fill="#d8d8d8"
        />
        <path
          className={styles.panel}
          ref={addPanelsRefs}
          d="m265.1 22.5 23.8 11.8-1.4 102-26.4 5.3z"
          fill="#515151"
        />
        <path
          className={styles.panel}
          ref={addPanelsRefs}
          d="m224.5 31.7 49.3-5V12.3l-53 1.7z"
          fill="#a5a5a5"
        />
      </g>
    </g>
  </svg>
    <div className={styles.formContainer}>
      <form>
        <input type="text" className={styles.input} />
        <div className={styles.btngroup}>
          <button className={styles.button} id={styles.red}>r</button>
          <button className={styles.button} id={styles.green}>g</button>
          <button className={styles.button} id={styles.blue}>b</button>
        </div>
      </form>
    </div>

	</>)
}
