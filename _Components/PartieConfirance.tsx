import Container from "./Container"

function PartieConfirance() {
  return (
        <div className="bg-gray-200 p-10">
                <Container>
                    <div>
                        <p className="text-center font-semibold text-2xl">Ils nous ont fait confiance !</p>
                    </div>
                    <div className="flex gap-10 text-center text-sm font-semibold mt-10">
                        <div className="space-y-6">
                            <img src="/coder.avif" alt="" className="rounded-full" width={1000} height={1000}/>
                            <p>Aboubacar BALLO</p>
                        </div>
                         <div className="space-y-6">
                            <img src="/coder.avif" alt="" className="rounded-full" width={1000} height={1000}/>
                            <p>Aboubacar GUEYE</p>
                        </div>
                         <div className="space-y-6">
                            <img src="/coder.avif" alt="" className="rounded-full" width={1000} height={1000} />
                            <p>Sirandjou KEITA</p>
                        </div>
                    </div>
                </Container>
            </div>
  )
}

export default PartieConfirance;