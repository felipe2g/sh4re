import shiki from "shiki"

export default async function CodeHighlight() {
    const rawCode = "const a = 10;"

    const highlighter = await shiki.getHighlighter({
        theme: "dracula"
    })

    const code = highlighter.codeToHtml(rawCode, { lang: "javascript"})

    return (
        <div dangerouslySetInnerHTML={{__html: code}}>
        </div>
    )
}