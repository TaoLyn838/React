import Tour from './Tour'
import Title from './Title'
import { tours } from '../data'

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours"></Title>

      <div className="section-center featured-center">
        {tours.map((tour) => {
          return <Tour id={tour.id} {...tour} />
        })}
      </div>
    </section>
  )
}
export default Tours
