import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const Logo: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <div class={classNames(displayClass, "logo")}>
      <a href={baseDir}>
        <img src={`/static/logo.png`} alt="Logo" />
      </a>
    </div>
  )
}

Logo.css = `
.logo {
  margin: 0.5rem 0;
}
.logo img {
  width: 100%;
  max-width: 500px;
  display: block;
}
`

export default (() => Logo) satisfies QuartzComponentConstructor
