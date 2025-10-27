import Link from 'next/link'

export default function NotFound() {
  return (
    <>
    {/* 404 Page Content */}
    <main className="flex min-h-[calc(100vh-200px)] items-center justify-center bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-[#094875] drop-shadow-md">404</h1>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl">
          Ουπς! Χαθήκατε στη διαδρομή;
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-gray-700">
          Η σελίδα που αναζητάτε δεν βρέθηκε. Ας σας βοηθήσουμε να βρείτε ξανά την πορεία σας.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="bg-[#094875] text-white font-semibold py-3 px-8 rounded-ss-2xl rounded-br-2xl hover:bg-[#5D9DCD] transition-colors duration-300 transform hover:scale-105 shadow-md"
          >
            Επιστροφή στην Αρχική
          </Link>
        </div>
      </div>
    </main>
    </>
  )
}