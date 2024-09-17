const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:justify-evenly px-4 bg-[#282828] text-[#f3f4e5] py-4 font-EpilogueVar">
      <div className="flex flex-col items-center">
        <h3 className="text-2xl ">Contact</h3>
        <ul className="text-lg">
          <li>Phone: 0123456789</li>
          <li>Email:abc@gmail.com</li>
          <li>Address:Kathmandu</li>
        </ul>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-2xl ">Quick Links</h3>
        <ul className="text-lg">
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Lorem</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
