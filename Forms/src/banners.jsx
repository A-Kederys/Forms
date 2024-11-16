import React from 'react'
import styles from './App.module.css';

const BlockyRoad = ({  className = "" }) => (
<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 800"
    fill="currentColor"
    width="100%"
    height="99vh"
    className={`${styles.blockyRoad} ${className}`}
>
  <rect fill='#111822' width='100%' height='100%' />
        <g fill='none' stroke-opacity='1'>
            <g stroke='#111822' stroke-width='17'>
            <line className={styles.line} x1='-8' y1='-8' x2='808' y2='808'/>
            <line className={styles.line} x1='-8' y1='792' x2='808' y2='1608'/>
            <line className={styles.line} x1='-8' y1='-808' x2='808' y2='8'/>
            </g>
            <g stroke='#181f2e' stroke-width='16'>
            <line className={styles.line} x1='-8' y1='767' x2='808' y2='1583'/>
            <line className={styles.line} x1='-8' y1='17' x2='808' y2='833'/>
            <line className={styles.line} x1='-8' y1='-33' x2='808' y2='783'/>
            <line className={styles.line} x1='-8' y1='-783' x2='808' y2='33'/>
            </g>
            <g stroke='#21253a' stroke-width='15'>
            <line className={styles.line} x1='-8' y1='742' x2='808' y2='1558'/>
            <line className={styles.line} x1='-8' y1='42' x2='808' y2='858'/>
            <line className={styles.line} x1='-8' y1='-58' x2='808' y2='758'/>
            <line className={styles.line} x1='-8' y1='-758' x2='808' y2='58'/>
            </g>
            <g stroke='#2d2b45' stroke-width='14'>
            <line className={styles.line} x1='-8' y1='67' x2='808' y2='883'/>
            <line className={styles.line} x1='-8' y1='717' x2='808' y2='1533'/>
            <line className={styles.line} x1='-8' y1='-733' x2='808' y2='83'/>
            <line className={styles.line} x1='-8' y1='-83' x2='808' y2='733'/>
            </g>
            <g stroke='#3b3050' stroke-width='13'>
            <line className={styles.line} x1='-8' y1='92' x2='808' y2='908'/>
            <line className={styles.line} x1='-8' y1='692' x2='808' y2='1508'/>
            <line className={styles.line} x1='-8' y1='-108' x2='808' y2='708'/>
            <line className={styles.line} x1='-8' y1='-708' x2='808' y2='108'/>
            </g>
            <g stroke='#4b3559' stroke-width='12'>
            <line className={styles.line} x1='-8' y1='667' x2='808' y2='1483'/>
            <line className={styles.line} x1='-8' y1='117' x2='808' y2='933'/>
            <line className={styles.line} x1='-8' y1='-133' x2='808' y2='683'/>
            <line className={styles.line} x1='-8' y1='-683' x2='808' y2='133'/>
            </g>
            <g stroke='#5c3961' stroke-width='11'>
            <line className={styles.line} x1='-8' y1='642' x2='808' y2='1458'/>
            <line className={styles.line} x1='-8' y1='142' x2='808' y2='958'/>
            <line className={styles.line} x1='-8' y1='-158' x2='808' y2='658'/>
            <line className={styles.line} x1='-8' y1='-658' x2='808' y2='158'/>
            </g>
            <g stroke='#6f3d67' stroke-width='10'>
            <line className={styles.line} x1='-8' y1='167' x2='808' y2='983'/>
            <line className={styles.line} x1='-8' y1='617' x2='808' y2='1433'/>
            <line className={styles.line} x1='-8' y1='-633' x2='808' y2='183'/>
            <line className={styles.line} x1='-8' y1='-183' x2='808' y2='633'/>
            </g>
            <g stroke='#81416a' stroke-width='9'>
            <line className={styles.line} x1='-8' y1='592' x2='808' y2='1408'/>
            <line className={styles.line} x1='-8' y1='192' x2='808' y2='1008'/>
            <line className={styles.line} x1='-8' y1='-608' x2='808' y2='208'/>
            <line className={styles.line} x1='-8' y1='-208' x2='808' y2='608'/>
            </g>
            <g stroke='#94446c' stroke-width='8'>
            <line className={styles.line} x1='-8' y1='567' x2='808' y2='1383'/>
            <line className={styles.line} x1='-8' y1='217' x2='808' y2='1033'/>
            <line className={styles.line} x1='-8' y1='-233' x2='808' y2='583'/>
            <line className={styles.line} x1='-8' y1='-583' x2='808' y2='233'/>
            </g>
            <g stroke='#a6486c' stroke-width='7'>
            <line className={styles.line} x1='-8' y1='242' x2='808' y2='1058'/>
            <line className={styles.line} x1='-8' y1='542' x2='808' y2='1358'/>
            <line className={styles.line} x1='-8' y1='-558' x2='808' y2='258'/>
            <line className={styles.line} x1='-8' y1='-258' x2='808' y2='558'/>
            </g>
            <g stroke='#b84e6a' stroke-width='6'>
            <line className={styles.line} x1='-8' y1='267' x2='808' y2='1083'/>
            <line className={styles.line} x1='-8' y1='517' x2='808' y2='1333'/>
            <line className={styles.line} x1='-8' y1='-533' x2='808' y2='283'/>
            <line className={styles.line} x1='-8' y1='-283' x2='808' y2='533'/>
            </g>
            <g stroke='#c75466' stroke-width='5'>
            <line className={styles.line} x1='-8' y1='292' x2='808' y2='1108'/>
            <line className={styles.line} x1='-8' y1='492' x2='808' y2='1308'/>
            <line className={styles.line} x1='-8' y1='-308' x2='808' y2='508'/>
            <line className={styles.line} x1='-8' y1='-508' x2='808' y2='308'/>
            </g>
            <g stroke='#d65d60' stroke-width='4'>
            <line className={styles.line} x1='-8' y1='467' x2='808' y2='1283'/>
            <line className={styles.line} x1='-8' y1='317' x2='808' y2='1133'/>
            <line className={styles.line} x1='-8' y1='-333' x2='808' y2='483'/>
            <line className={styles.line} x1='-8' y1='-483' x2='808' y2='333'/>
            </g>
            <g stroke='#e2675a' stroke-width='3'>
            <line className={styles.line} x1='-8' y1='342' x2='808' y2='1158'/>
            <line className={styles.line} x1='-8' y1='442' x2='808' y2='1258'/>
            <line className={styles.line} x1='-8' y1='-458' x2='808' y2='358'/>
            <line className={styles.line} x1='-8' y1='-358' x2='808' y2='458'/>
            </g>
            <g stroke='#ec7352' stroke-width='2'>
            <line className={styles.line} x1='-8' y1='367' x2='808' y2='1183'/>
            <line className={styles.line} x1='-8' y1='417' x2='808' y2='1233'/>
            <line className={styles.line} x1='-8' y1='-433' x2='808' y2='383'/>
            <line className={styles.line} x1='-8' y1='-383' x2='808' y2='433'/>
            </g>
            <g stroke='#F38049' stroke-width='1'>
            <line className={styles.line} x1='-8' y1='392' x2='808' y2='1208'/>
            <line className={styles.line} x1='-8' y1='-408' x2='808' y2='408'/>
            </g>
        </g>
    </svg>

  );
  
  export default BlockyRoad;