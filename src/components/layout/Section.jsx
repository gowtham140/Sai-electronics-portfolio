import Container from './Container'

export default function Section({ id, children, className, containerClassName }) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-24 ${className ?? ''}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}
