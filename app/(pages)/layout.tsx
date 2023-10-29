
import Footer from "../components/Footer/Footer"
import NavigationNavbar from "../components/NavigationNavbar/NavigationNavbar"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <NavigationNavbar />
            {children}
            <Footer />
        </>
    )
}