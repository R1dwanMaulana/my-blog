import { HeadPost } from './HeadPost'

export default function BlogPost({ image ,children, meta}) {
  return (
    <>
      <image>{image}</image>
      <HeadPost meta={meta} isBlogPost />
      <article>{children}</article>
    </>
  )
}