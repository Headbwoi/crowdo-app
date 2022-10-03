import ModalPledgeCard from "./ModalPledgeCard"

type Props = {}

const Modal = (props: Props) => {
  return (
    <>
      <div className="w-full min-h-full backdrop-brightness-50 absolute -top-8 left-0">
        <div className="modal md:w-[42.625rem] bg-white w-full rounded-lg  p-5 md:p-7 top-[8.5rem] md:top-44 left-1/2 -translate-x-1/2 absolute">
          <header className="mb-7 md:mb-10">
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <h4 className="text-lg md:text-xl text-black font-bold">
                Back this project
              </h4>
              <svg
                width="14"
                height="15"
                xmlns="http://www.w3.org/2000/svg"
                className="text-dark_Gray hover:text-black duration-200 cursor-pointer"
              >
                <g fill="currentColor" fillRule="evenodd">
                  <path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z" />
                  <path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z" />
                </g>
              </svg>
            </div>
            <p className="text-dark_Gray text-sm md:text-base font-medium">
              Want to support us in bringing Mastercraft Bamboo Monitor Riser
              out in the world?
            </p>
          </header>

          <div className="pledge options flex flex-col space-y-6">
            <div className="border border-dark_Gray/30 w-full p-5 md:p-7 rounded-lg hover:border-dark_Gray/60">
              <label
                htmlFor="heading"
                className="group flex items-center space-x-4 md:space-x-6 cursor-pointer mb-8 md:mb-4"
              >
                <div className="grid place-items-center w-7 h-7 rounded-full border border-dark_Gray/30">
                  <div className="w-4 h-4 rounded-full bg-white group-hover:bg-moderate_Cyan duration-200 group-focus:bg-moderate_Cyan"></div>
                </div>
                <p
                  id="heading"
                  className="text-black text-lg font-bold hover:text-moderate_Cyan"
                >
                  Pledge with no reward
                </p>
              </label>
              <p className="text-dark_Gray text-sm md:text-base font-medium md:pl-[3.2rem]">
                Choose to support us without a reward if you simply believe in
                our project. As a backer, you will be signed up to receive
                product updates via email.
              </p>
            </div>
            <ModalPledgeCard
              pledgeHeading="Bamboo Stand"
              pledgeAmount="25"
              aboutPledge="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, andyou’ll be added to a special Backer member list."
              stockLeft="101"
            />
            <ModalPledgeCard
              pledgeHeading="Black Edition Stand"
              pledgeAmount="75"
              aboutPledge="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
              member list. Shipping is included."
              stockLeft="64"
            />
            <ModalPledgeCard
              pledgeHeading="Mahogany Special Edition"
              pledgeAmount="200"
              aboutPledge="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
              to our Backer member list. Shipping is included."
              stockLeft="0"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
