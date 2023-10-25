"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[973],{74791:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>s,default:()=>N,frontMatter:()=>d,metadata:()=>p,toc:()=>k});var a=n(87462),i=n(63366),l=(n(51702),n(1037)),o=n(29807),r=["components"],d={id:"information",title:"Information"},s=void 0,p={unversionedId:"components/information",id:"components/information",title:"Information",description:"Usage",source:"@site/docs/components/Information.mdx",sourceDirName:"components",slug:"/components/information",permalink:"/docs/components/information",draft:!1,editUrl:"https://github.com/docs/components/Information.mdx",tags:[],version:"current",frontMatter:{id:"information",title:"Information"},sidebar:"docs",previous:{title:"Collapse",permalink:"/docs/components/collapse"},next:{title:"Slider",permalink:"/docs/components/slider"}},m={},k=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],u={toc:k},c="wrapper";function N(t){var e=t.components,n=(0,i.Z)(t,r);return(0,l.kt)(c,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("div",{class:"row inline-flex-center"},(0,l.kt)("div",{class:"col col--12"},(0,l.kt)(o.Z,{mdxType:"CodeBlock"},"import { Information } from '@momo-kits/foundation';"))),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("div",{class:"table-responsive"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CTA")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'Optional. The text for the Call To Action (CTA) button. This is intended to prompt the userto take some specified action like "Retry", "Learn More", or "Dismiss".')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"description")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"The main content text of the information block. This text provides the necessary detailsand is essential for understanding the context of the message.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"image")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. The URL or local file path of an image to be displayed. This is typically usedto provide visual context or support to the information being presented.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onPressCTA")),(0,l.kt)("td",{parentName:"tr",align:null},"Function"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. A callback function that is triggered when the CTA button is pressed. This isused to handle the user's response to the proposed call to action.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onPressClose")),(0,l.kt)("td",{parentName:"tr",align:null},"Function"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. A callback function that is triggered when the close icon is pressed. This isused to handle the dismissal of the information block, often removing it from display.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"showIcon")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", an icon is displayed within the information block, often used tovisually reinforce the state or content of the block. The type of icon is typicallyinfluenced by the ",(0,l.kt)("inlineCode",{parentName:"td"},"state")," prop.Defaults to ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," if not provided.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"showIconClose")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", a close icon is displayed, usually in the upper corner of the informationblock, indicating that the user can dismiss or remove the block from view.Defaults to ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," if not provided.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"state")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"default")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"warning")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"error")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"default")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. Specifies the state of the information block, which may influence the block'sstyling, such as color coding. The 'default' state is neutral, while 'warning' and 'error'represent increasing levels of urgency or attention.Defaults to 'default' if not provided.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"style")),(0,l.kt)("td",{parentName:"tr",align:null},"ViewStyle"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. Custom styles to apply to the Information component. Can be used to adjustthe visual presentation or layout beyond the default and state-based styling.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"title")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. The title for the information block, often used to emphasize the main theme orto indicate the reason for the message. If not provided, only the description will be shown."))))))}N.isMDXComponent=!0}}]);