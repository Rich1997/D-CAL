import Dark from '../assets/logos/Dark';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <section className="w-full md:px-8 px-5 py-32 h-fit">
                <div className="flex gap-16 items-center justify-center max-w-4xl mx-auto">
                    <div className="animate-bounce pb-16">
                        <Dark size={100} />
                    </div>
                    <div className="font-black dark:text-white text-neutral-900 text-5xl tracking-tighter max-w-md">
                        Open source
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-400 pr-1">
                            {' '}
                            fitness
                        </span>{' '}
                        repository
                    </div>
                </div>
            </section>
            <section className="dark:bg-neutral-900">
                <div className="max-w-4xl mx-auto dark:text-white text-neutral-900">
                    Hello
                </div>
            </section>
        </div>
    );
};

export default Home;
