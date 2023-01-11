import React from 'react';
import './Preview.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
// import {Remark} from 'react-remark';

export default function Preview (props){

    // const [preview, setPreview] = React.useState(filterText(props.markdown));

    // function filterText(text){
    //     const filtered = text.replace('<div><br></div>', "\n\n")
    //     return filtered
    // }

    // function addHey(text){
    //     const htmlTags = /<\/?[a-z][^>]*>/ig;

    //     const cet = text.replaceAll('&nbsp;', ' ')
    //     const htmlTagIndex = cet.indexOf('<');

    //     const string1 = cet.substring(0, htmlTagIndex);
    //     const string2 = cet.substring(htmlTagIndex);
    //     const stringWithoutTags = string2.replaceAll(htmlTags, '');

    //     console.log(string1)
    //     console.log(string2)
    //     console.log(stringWithoutTags);

    //     const fullString = string1 + '¶' + stringWithoutTags;
    //     // setPreview(fullString)
    //     return fullString;
    // }


    return(
        <div className='preview'>
             {/* <ReactMarkdown
                children={props.markdown}
                // remarkPlugins={[[remarkGfm, {singleTilde: false}]]}
                // rehypePlugins={[[rehypeRaw, {allowDangerousHtml: true}]]}
                // skipHtml={true}
             /> */}

             {/* <Remark
                remarkPlugins={[[remarkGfm, {singleTilde: false}]]}
                >
                {props.markdown}
             </Remark> */}

             <ReactMarkdown
                children={props.markdownPreview}
                skipHtml={true}
                // options={{wrapper: 'article'}}
                remarkPlugins={[[remarkGfm, {singleTilde: false}]]}
             />
                {/* {props.markdown} */}
                {/* {'nh\n\n~~gg~~'} */}
                {}
             {/* </ReactMarkdown> */}
        </div>
    )
}