import { ReactNode } from "react"
import Section from "./partials/Section"

interface HeroProps {
    title: ReactNode
    subtitle?: string
    children?: ReactNode
    images?: ReactNode
}

export default function Hero({ title, subtitle, children, images }: HeroProps) {
    return (
        <Section>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[80vh] lg:py-12 gap-4 md:gap-8 lg:gap-12 py-10">
                {/* Left Content */}
                <div className="text-left grid place-items-center order-2 lg:order-1">
                    <div className='text-center flex flex-col justify-center gap-2 lg:gap-6'>
                        <h1 className="text-3xl md:text-5xl font-bold font-sans">
                            {title}
                        </h1>

                        {subtitle && (
                            <p className="font-serif text-ci-muted max-w-4/5 mx-auto mb-2">
                                {subtitle}
                            </p>
                        )}

                        {children && (
                            <div className="">
                                {children}
                            </div>
                        )}
                    </div>
                </div>
                
                {images}
            </div>
        </Section>
    )
}