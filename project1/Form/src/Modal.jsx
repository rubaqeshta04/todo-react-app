export default function Modal({ isVisible, errorMessage = null }) {
  if (isVisible) {
    return (
      <>
        <div
          className="fixed inset-0 bg-black/50 
                    flex items-center justify-center
                    z-50"
        >
          <div className="bg-white rounded-2xl p-6 w-80 text-center shadow-xl">
            <h2 className="text-xl font-bold text-blue-600 mb-2">
              Loan Status
            </h2>
            {/* <p className="text-gray-700">
              Your request has been submitted successfully
            </p> */}
            <p className={errorMessage ? "text-red-500" : "text-gray-700"}>
              {errorMessage != null ? errorMessage : "Your request has been submitted successfully"}
            </p>
          </div>
        </div>
      </>
    );
  } else {
    return <></>
  }
}
