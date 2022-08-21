import Video from '../video/spiderman.mp4'

export default function VideoSection() {
  return (
    <section className="bg-video">
      <video className="video" autoPlay muted loop>
        <source src={Video} type="video/mp4" />
      </video>
    </section>
  )
}