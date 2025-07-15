import Image from "next/image"
import { Github, Linkedin, Twitter, MapPin, Calendar, ExternalLink } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-custom-darker text-custom-text">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="flex-shrink-0">
            <Image
              src="/images/profile.png"
              alt="Pablo Estévez"
              width={200}
              height={200}
              className="rounded-full border border-custom-border"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-bold text-custom-text mb-2">Pablo Estévez</h1>
            <p className="text-xl text-custom-text-muted mb-4">Desarrollador Full-Stack & Administrador de Sistemas</p>

            <div className="flex flex-wrap gap-4 text-sm text-custom-text-light mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                18 años
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Estudiante SMR 2º año
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-custom-text mb-4 border-b border-custom-border pb-2">Sobre mí</h2>
          <p className="text-custom-text-muted leading-relaxed">
            Estudiante de segundo año de Sistemas Microinformáticos y Redes con experiencia profesional en desarrollo de
            software y administración de sistemas. Especializado en múltiples lenguajes de programación y con más de 2
            años de experiencia en administración de sistemas.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-custom-text mb-4 border-b border-custom-border pb-2">Habilidades</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-custom-text mb-6">Desarrollo</h3>
              <div className="flex flex-wrap gap-4">
                {/* Java */}
                <div className="group relative">
                  <div className="w-12 h-12 rounded-full bg-custom-dark border border-custom-border flex items-center justify-center hover:bg-custom-border hover:border-custom-text-light transition-all duration-300 cursor-pointer">
                    <svg
                      className="w-6 h-6 text-custom-text-light group-hover:text-custom-text"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639" />
                    </svg>
                  </div>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-custom-dark border border-custom-border px-2 py-1 rounded text-xs text-custom-text opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    Java
                  </div>
                </div>

                {/* Python */}
                <div className="group relative">
                  <div className="w-12 h-12 rounded-full bg-custom-dark border border-custom-border flex items-center justify-center hover:bg-custom-border hover:border-custom-text-light transition-all duration-300 cursor-pointer">
                    <svg
                      className="w-6 h-6 text-custom-text-light group-hover:text-custom-text"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
                    </svg>
                  </div>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-custom-dark border border-custom-border px-2 py-1 rounded text-xs text-custom-text opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    Python
                  </div>
                </div>

                {/* C# */}
                <div className="group relative">
                  <div className="w-12 h-12 rounded-full bg-custom-dark border border-custom-border flex items-center justify-center hover:bg-custom-border hover:border-custom-text-light transition-all duration-300 cursor-pointer">
                    <svg
                      className="w-6 h-6 text-custom-text-light group-hover:text-custom-text"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zM9.426 7.12a5.55 5.55 0 011.985.38v1.181a4.5 4.5 0 00-2.025-.456 2.071 2.071 0 00-1.56.639 2.4 2.4 0 00-.585 1.686 2.4 2.4 0 00.585 1.686 2.071 2.071 0 001.56.639 4.5 4.5 0 002.025-.456v1.181a5.55 5.55 0 01-1.985.38 3.361 3.361 0 01-2.535-1.035 3.8 3.8 0 01-.975-2.715 3.8 3.8 0 01.975-2.715A3.361 3.361 0 019.426 7.12zm8.748 0l-.405 1.08h-.855l-.405-1.08h-.855l.405 1.08h-.855v.855h1.08l.405 1.08h-.855v.855h1.08l.405 1.08h.855l-.405-1.08h.855l.405 1.08h.855l-.405-1.08h.855v-.855h-1.08l-.405-1.08h.855v-.855h-1.08l-.405-1.08zm-1.71 1.935h.855l.405 1.08h-.855z" />
                    </svg>
                  </div>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-custom-dark border border-custom-border px-2 py-1 rounded text-xs text-custom-text opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    C#
                  </div>
                </div>

                {/* Otros lenguajes */}
                <div className="group relative">
                  <div className="w-12 h-12 rounded-full bg-custom-dark border border-custom-border flex items-center justify-center hover:bg-custom-border hover:border-custom-text-light transition-all duration-300 cursor-pointer">
                    <svg
                      className="w-6 h-6 text-custom-text-light group-hover:text-custom-text"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-custom-dark border border-custom-border px-2 py-1 rounded text-xs text-custom-text opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    Otros lenguajes
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-custom-text mb-6">Administración de Sistemas</h3>
              <div className="flex flex-wrap gap-4">
                {/* Gestión de Servidores */}
                <div className="group relative">
                  <div className="w-12 h-12 rounded-full bg-custom-dark border border-custom-border flex items-center justify-center hover:bg-custom-border hover:border-custom-text-light transition-all duration-300 cursor-pointer">
                    <svg
                      className="w-6 h-6 text-custom-text-light group-hover:text-custom-text"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                      />
                    </svg>
                  </div>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-custom-dark border border-custom-border px-2 py-1 rounded text-xs text-custom-text opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    Gestión de Servidores
                  </div>
                </div>

                {/* Redes y Seguridad */}
                <div className="group relative">
                  <div className="w-12 h-12 rounded-full bg-custom-dark border border-custom-border flex items-center justify-center hover:bg-custom-border hover:border-custom-text-light transition-all duration-300 cursor-pointer">
                    <svg
                      className="w-6 h-6 text-custom-text-light group-hover:text-custom-text"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-custom-dark border border-custom-border px-2 py-1 rounded text-xs text-custom-text opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    Redes y Seguridad
                  </div>
                </div>

                {/* Automatización */}
                <div className="group relative">
                  <div className="w-12 h-12 rounded-full bg-custom-dark border border-custom-border flex items-center justify-center hover:bg-custom-border hover:border-custom-text-light transition-all duration-300 cursor-pointer">
                    <svg
                      className="w-6 h-6 text-custom-text-light group-hover:text-custom-text"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-custom-dark border border-custom-border px-2 py-1 rounded text-xs text-custom-text opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    Automatización
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-custom-text mb-4 border-b border-custom-border pb-2">Formación</h2>
          <div className="bg-custom-dark rounded-lg p-6 border border-custom-border">
            <h3 className="text-lg font-semibold text-custom-text mb-2">Sistemas Microinformáticos y Redes</h3>
            <p className="text-custom-text-light mb-2">Segundo año • En curso</p>
            <p className="text-custom-text-muted">
              Formación especializada en administración de sistemas, redes informáticas y desarrollo de aplicaciones.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-custom-text mb-4 border-b border-custom-border pb-2">Contacto</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-custom-text mb-3">Email</h3>
              <a
                href="mailto:contacto@pabloestevez.es"
                className="text-custom-text-light hover:text-custom-text-muted hover:underline"
              >
                contacto@pabloestevez.es
              </a>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-custom-text mb-3">Redes Sociales</h3>
              <div className="space-y-2">
                <div>
                  <a
                    href="https://twitter.com/paablo_estevez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-custom-text-light hover:text-custom-text-muted hover:underline"
                  >
                    <Twitter className="w-4 h-4" />
                    @paablo_estevez
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/pablo-estevez-76428634a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-custom-text-light hover:text-custom-text-muted hover:underline"
                  >
                    <Linkedin className="w-4 h-4" />
                    Pablo Estévez
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/Londraa23"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-custom-text-light hover:text-custom-text-muted hover:underline"
                  >
                    <Github className="w-4 h-4" />
                    Londraa23
                  </a>
                </div>
                <div>
                  <a
                    href="https://e-z.bio/Londra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-custom-text-light hover:text-custom-text-muted hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    e-z.bio/Londra
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-custom-border pt-8">
          <p className="text-center text-custom-text-light">© 2025 Pablo Estévez</p>
        </footer>
      </div>
    </div>
  )
}
