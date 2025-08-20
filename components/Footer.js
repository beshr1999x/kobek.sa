export default function Footer(){
  return (
    <footer className="py-10 bg-gray-100 mt-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} كوبك — جميع الحقوق محفوظة</p>
        <div className="flex gap-4 text-sm">
          <a href="#" className="hover:underline">الشروط والأحكام</a>
          <a href="#" className="hover:underline">سياسة الخصوصية</a>
          <a href="#" className="hover:underline">تواصل معنا</a>
        </div>
      </div>
    </footer>
  )
}
