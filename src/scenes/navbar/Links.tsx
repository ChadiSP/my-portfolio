import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    children: React.ReactNode
    target: string
    font?: string
}

const Links = ({children,target,font}: Props) => {
  return (
    <AnchorLink
    href={`#${target}`}
    className={`text-gray-20 hover:text-white text-xl hover:border-b-2 hover:border-secondary-200 transition duration-500 ease-in-out cursor-pointer bxglow ${font}`}
    >
        {children}
    </AnchorLink>
  )
}

export default Links