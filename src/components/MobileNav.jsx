import { useTransition, animated } from "react-spring";
import { IoLogoGithub } from "react-icons/io5";

const MobileNav = ({ open }) => {

  const transition = useTransition(open, {
    from: {
      opacity: 0,
      transformMain: "translateY(40px)",
      transformFoot: "translateY(200px)",
    },
    enter: {
      opacity: 1,
      transformMain: "translateY(0px)",
      transformFoot: "translateY(0px)",
    },
    leave: {
      opacity: 0,
      transformMain: "translateY(40px)",
      transformFoot: "translateY(200px)"
    }
  });

  return transition(({ opacity, transformMain, transformFoot }, visible) => {
    return visible ? (
        <animated.nav style={{ opacity }} className="mobile-nav">
          <div className="content-wrapper">
            <animated.div
                className="icon-wrapper"
                style={{ transform: transformFoot }}
            >
              <a href={"https://github.com/da-nae"}><IoLogoGithub className="icon" color={"#f3edd8"}/></a>
            </animated.div>
          </div>
        </animated.nav>
    ) : null;
  });
};

export default MobileNav;
