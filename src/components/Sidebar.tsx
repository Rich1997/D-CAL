import CalculatorIcon from '../assets/icons/CalculatorIcon';
import FitnessIcon from '../assets/icons/FitnessIcon';
import Logo from '../assets/logos/Logo';
import Listitem from './Listitem';
import { iconSize, largeIconSize, textLogoSize } from './Sizedefs';

const Sidebar = () => {
    return (
        <div className="min-h-full w-64 lg:block hidden text-colors default-border-x shrink-0">
            <div className="flex flex-col pt-14 gap-24">
                <Logo size={textLogoSize} />
                <div className="flex flex-col">
                    <Listitem>
                        <CalculatorIcon size={iconSize} />
                        <div className="">Calculators</div>
                    </Listitem>
                    <Listitem>
                        <FitnessIcon size={iconSize} />
                        <div className="">Exercises</div>
                    </Listitem>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
