import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SiLinuxfoundation } from "react-icons/si";
import { BiExpand } from "react-icons/bi";
import { TbBrandBooking } from "react-icons/tb";
import { FaGlobeAsia } from "react-icons/fa";

const CompanyHistory = () => {
    return (
        <>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: "rgb(254 202 202)",
                        color: "rgb(185 28 28)",
                    }}
                    contentArrowStyle={{
                        borderRight: "7px solid  rgb(185 28 28)",
                    }}
                    date="2000"
                    iconStyle={{
                        background: "rgb(185 28 28)",
                        color: "#fff",
                    }}
                    icon={<SiLinuxfoundation />}
                >
                    <h3 className="vertical-timeline-element-title text-xl font-bold pb-4">
                        Foundation
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        We started with a small fleet of vehicles and a
                        commitment to providing excellent customer service.
                    </h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2005"
                    contentArrowStyle={{
                        borderRight: "7px solid  rgb(185 28 28)",
                    }}
                    iconStyle={{
                        background: "rgb(185 28 28)",
                        color: "#fff",
                    }}
                    contentStyle={{
                        background: "rgb(254 202 202)",
                        color: "rgb(185 28 28)",
                    }}
                    icon={<BiExpand />}
                >
                    <h3 className="vertical-timeline-element-title text-xl font-bold pb-4">
                        Expand
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Expanded our fleet and began offering a wider range of
                        vehicles to meet growing customer demands.
                    </h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: "rgb(254 202 202)",
                        color: "rgb(185 28 28)",
                    }}
                    contentArrowStyle={{
                        borderRight: "7px solid  rgb(185 28 28)",
                    }}
                    date="2010"
                    iconStyle={{
                        background: "rgb(185 28 28)",
                        color: "#fff",
                    }}
                    icon={<TbBrandBooking />}
                >
                    <h3 className="vertical-timeline-element-title text-xl font-bold pb-4">
                    Online Booking
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                    Launched our online booking system, making it easier than ever for customers to rent vehicles from anywhere.
                    </h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2015"
                    contentArrowStyle={{
                        borderRight: "7px solid  rgb(185 28 28)",
                    }}
                    iconStyle={{
                        background: "rgb(185 28 28)",
                        color: "#fff",
                    }}
                    contentStyle={{
                        background: "rgb(254 202 202)",
                        color: "rgb(185 28 28)",
                    }}
                    icon={<FaGlobeAsia />}
                >
                    <h3 className="vertical-timeline-element-title text-xl font-bold pb-4">
                    Nationwide Coverage
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                    Extended our services nationwide, offering convenient pick-up and drop-off locations across the country.
                    </h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: "rgb(254 202 202)",
                        color: "rgb(185 28 28)",
                    }}
                    contentArrowStyle={{
                        borderRight: "7px solid  rgb(185 28 28)",
                    }}
                    date="2020 - Present"
                    iconStyle={{
                        background: "rgb(185 28 28)",
                        color: "#fff",
                    }}
                    icon={<TbBrandBooking />}
                >
                    <h3 className="vertical-timeline-element-title text-xl font-bold pb-4">
                    Sustainability
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                    Introduced eco-friendly vehicles into our fleet and implemented green practices to reduce our carbon footprint.
                    </h4>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </>
    );
};

export default CompanyHistory;