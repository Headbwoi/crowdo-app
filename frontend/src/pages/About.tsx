import { useEffect } from "react"
import Layout from "../Layout/Layout"

function About() {
  useEffect(() => {
    scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <section className="my-28 w-full px-5 md:px-6 lg:px-0 container">
        <h1 className="font-bold text-4xl md:text-6xl text-white text-center leading-normal">
          About <span className="text-green_Text/80">Crowdo</span>
        </h1>

        <div className="text-white py-20">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas hic
          veritatis impedit, maiores consectetur ea quisquam voluptatem sequi
          est facilis. Reprehenderit laborum fuga impedit nihil eveniet aperiam
          illum. Quam voluptate exercitationem voluptatibus debitis magnam ex
          sed, voluptates quis impedit, velit sapiente, tempore natus sit! Vero
          animi tempora, repellendus labore corrupti fugiat voluptatum eius quos
          soluta doloribus ullam temporibus iste ex, excepturi explicabo a
          facere eos. Voluptatem qui totam fugiat molestias odio natus esse
          inventore optio. Similique blanditiis ratione totam nesciunt
          praesentium enim sequi quo quas! Praesentium nam animi itaque, soluta
          doloribus nemo ducimus rerum at veritatis repudiandae eum cupiditate
          molestiae dolorem hic tenetur facere iusto eligendi. Odio dolorem
          adipisci voluptas eos illo tenetur. Deleniti, deserunt sunt, odio quo
          unde aut vel nostrum iusto accusamus architecto ratione maiores nobis
          eligendi voluptatibus autem cumque, porro consectetur. Quod distinctio
          officiis eius iure doloremque deserunt quaerat consectetur eveniet
          eaque a, praesentium odit, ut labore nesciunt eligendi nihil facilis
          rerum reiciendis provident nobis nemo voluptates, repellat
          perspiciatis? Quo quam est hic ratione ducimus sed consequatur,
          possimus aspernatur eos ullam inventore ad perspiciatis alias, facilis
          tenetur deserunt? Sunt ex voluptatem, impedit fuga in est! Ad
          similique voluptatem iure beatae quaerat in tempora quod doloribus
          eius suscipit.
        </div>
      </section>
    </Layout>
  )
}

export default About
