interface Testimonial {
    name: string;
    roles: string;
    image: string;
    review: string
  }
  const TestimonialList: Testimonial[] = [
    {
        name: "Ayush Raj",
        roles: "VP of Marketing @ Webflow",
        image: "../src/assets/profile-ayush.svg",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        name: "Neue Montreal",
        roles: "Founder @ CopyPossy",
        image: "../src/assets/profile-alex.svg",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  ];
  
  export default TestimonialList;