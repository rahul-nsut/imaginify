import { Collection } from "@/components/shared/Collections"
import { navLinks } from "@/constants"
import { getAllImages } from "@/lib/actions/image.actions"
import { link } from "fs"
import Image from "next/image"
import Link from "next/link"


const Home = async ({searchParams}: SearchParamProps) => {

  const page=Number(searchParams?.page) || 1;
  const searchQuery= (searchParams?.query as string) || '';
  const images=await getAllImages({page,searchQuery})

  return (
    <>
      <section className="home">
        <h1 className="home-heading">Unleash Your Creative Version With Imaginify</h1>

        <ul className="flex-center gap-20 w-full">
          {navLinks.slice(1,5).map((link)=>(
            <Link
              key={link.route}
              href={link.route}
              className="flex-center flex-col gap-2"
            >

              <li className="flex-center w-fit bg-white rounded-full p-4">
                <Image
                  src={link.icon}
                  alt="image"
                  width={24}
                  height={24}

                
                />
              </li>

              <p className="p-14-medium text-center text-white pt-3"> {link.label}</p>
            </Link>
          ))}

        </ul>
      </section>

      <section className="sm:mt-12">
        <Collection
        hasSearch={true}
        images={images?.data}
        totalPages={images?.totalPage}
        page={page}

        />

      </section>
    </>
  )
}

export default Home
