import PledgeCard from "../PledgeCard"

const AboutFund = () => {
  return (
    <section className="px-6 md:px-10 lg:px-12 bg-white rounded-lg w-full py-9  shadow-xl relative">
      <h3 className="text-lg md:text-xl text-black font-bold mb-10 md:mb-14">
        About this project
      </h3>
      <div className="info">
        <p className="mb-10 md:mb-12 text-dark_Gray text-base font-medium">
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p className="mb-10 md:mb-12 text-dark_Gray text-base font-medium">
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>
      </div>
      <div className="pledge-types flex flex-col space-y-11">
        <PledgeCard
          pledgeHeading="Bamboo Stand"
          pledgeAmount="25"
          aboutPledge="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
          stockLeft="101"
        />
        <PledgeCard
          pledgeHeading="Black Edition Stand"
          pledgeAmount="75"
          aboutPledge="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
          stockLeft="64"
        />
        <PledgeCard
          pledgeHeading="Mahogany Special Edition"
          pledgeAmount="200"
          aboutPledge="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
          stockLeft="0"
          completed={true}
        />
      </div>
    </section>
  )
}

export default AboutFund
