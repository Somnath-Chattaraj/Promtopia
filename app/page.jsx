import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Share
            <br className="max-md:hidden" />
            <span className="orange_gradient txet-center">AI-Powered Prompts</span>
            <p className="desc text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aperiam sapiente iusto eaque cum quis, dignissimos non, sequi minus quas praesentium impedit, quia numquam corporis. Inventore aspernatur quibusdam voluptatem tempora?</p>
        </h1>

        {/* <Feed /> */}
    </section>
  )
}

export default Home
