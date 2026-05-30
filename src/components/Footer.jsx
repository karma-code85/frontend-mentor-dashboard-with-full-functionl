export default function Footer(){
  return(
    <div className="p-4">
        <footer className="space-y-4 "><hr  className="mb-4"/>
          <span>© Frontend Mentor 2019 - 2026</span>
          <ul className="flex justify-between text-gray-500">
            <li>
              
              <button>Terms</button>
            </li>
            <li>

              <button>Cookies Policy</button>
            </li>
            <li>

              <button>Privacy Policy</button>
            </li>
            <li>

              <button>license</button>
            </li>
          </ul>
        </footer>
    </div>
  )
}