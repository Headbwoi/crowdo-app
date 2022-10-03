type Props = {}

const Modal = (props: Props) => {
  return (
    <>
      <div className="modal bg-white w-full rounded-lg absolute -top-[8.5rem] md:-top-44 left-1/2 -translate-x-1/2 placeholder-moderate_Cyan p-5 md:p-7">
        <header>
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
          <p className="text-dark_Gray text-sm font-medium">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
        </header>
      </div>
    </>
  )
}

export default Modal
