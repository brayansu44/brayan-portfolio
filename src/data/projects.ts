export type ProjectStatus =
    | "development"
    | "completed";

export interface ProjectDetails {
    problem: {
        es: string;
        en: string;
    };

    solution: {
        es: string;
        en: string;
    };

    features: {
        es: string[];
        en: string[];
    };

    architecture: {
        es: string;
        en: string;
    };

    status: {
        es: string;
        en: string;
    };

    nextSteps: {
        es: string[];
        en: string[];
    };

    technicalDecisions: {
        es: {
            title: string;
            description: string;
        }[];
        en: {
            title: string;
            description: string;
        }[];
    };

    learnings: {
        es: string[];
        en: string[];
    };

    screenshots?: {
        src: string;
        alt: {
            es: string;
            en: string;
        };
        caption: {
            es: string;
            en: string;
        };
    }[];
}

export interface Project {
    slug: string;
    title: string;
    status: ProjectStatus;
    featured: boolean;

    description: {
        es: string;
        en: string;
    };

    technologies: string[];

    image: string | null;
    github: string | null;
    demo: string | null;

    details?: ProjectDetails;
}

export const projects: Project[] = [
    {
        slug: "stockwise",
        title: "StockWise",
        status: "development",
        featured: true,

        description: {
            es: "API backend en desarrollo para una plataforma de gestión de inventario y ventas orientada a pequeñas y medianas empresas.",
            en: "Backend API under development for an inventory and sales management platform designed for small and medium-sized businesses.",
        },

        technologies: [
            "Python",
            "FastAPI",
            "PostgreSQL",
            "SQLAlchemy",
            "Alembic",
        ],

        image: null,

        github:
            "https://github.com/brayansu44/stockwise",

        demo: null,

        details: {
            problem: {
                es: "Muchas pequeñas y medianas empresas gestionan inventario, ventas y control de stock mediante procesos manuales o herramientas poco integradas, dificultando el seguimiento de productos, movimientos y niveles de existencias.",

                en: "Many small and medium-sized businesses manage inventory, sales and stock control through manual processes or poorly integrated tools, making it difficult to track products, movements and stock levels.",
            },

            solution: {
                es: "StockWise se está construyendo como una plataforma modular para centralizar la gestión de inventario y ventas. Actualmente el desarrollo está enfocado en la arquitectura del backend y en el módulo inicial de productos, dejando preparada una base para incorporar progresivamente los demás módulos.",

                en: "StockWise is being built as a modular platform to centralize inventory and sales management. Development is currently focused on the backend architecture and the initial product module, establishing a foundation for progressively adding the remaining modules.",
            },

            features: {
                es: [
                    "Entidad de dominio para productos.",
                    "Reglas básicas para incremento y disminución de stock.",
                    "Detección de productos con stock bajo.",
                    "Persistencia de productos mediante SQLAlchemy.",
                    "Creación de productos mediante API.",
                    "Listado de productos mediante API.",
                    "Consulta de productos por código.",
                    "Migraciones de base de datos con Alembic.",
                    "Configuración del entorno mediante variables de entorno.",
                ],

                en: [
                    "Product domain entity.",
                    "Basic rules for increasing and decreasing stock.",
                    "Low-stock product detection.",
                    "Product persistence using SQLAlchemy.",
                    "Product creation through the API.",
                    "Product listing through the API.",
                    "Product lookup by code.",
                    "Database migrations with Alembic.",
                    "Environment configuration using environment variables.",
                ],
            },

            architecture: {
                es: "El backend está organizado mediante una arquitectura por capas que separa dominio, aplicación, infraestructura y presentación. FastAPI expone la API, la lógica de negocio se mantiene separada de la persistencia y SQLAlchemy gestiona el acceso a PostgreSQL. Alembic se utiliza para versionar los cambios del esquema de base de datos.",

                en: "The backend is organized using a layered architecture that separates domain, application, infrastructure and presentation. FastAPI exposes the API, business logic remains separated from persistence, and SQLAlchemy manages access to PostgreSQL. Alembic is used to version database schema changes.",
            },

            technicalDecisions: {
                es: [
                    {
                        title:
                            "Separación por responsabilidades",
                        description:
                            "El backend se organiza en capas de dominio, aplicación, infraestructura y presentación para mantener separadas las reglas de negocio, los casos de uso, la persistencia y la API.",
                    },
                    {
                        title: "FastAPI para la API",
                        description:
                            "FastAPI se utiliza para exponer los endpoints del backend y trabajar con una estructura preparada para crecer mediante nuevos módulos y casos de uso.",
                    },
                    {
                        title:
                            "PostgreSQL y SQLAlchemy",
                        description:
                            "PostgreSQL se utiliza como base de datos relacional y SQLAlchemy como capa de persistencia, manteniendo separados los modelos de base de datos de las entidades del dominio.",
                    },
                    {
                        title:
                            "Migraciones con Alembic",
                        description:
                            "Los cambios en el esquema de base de datos se gestionan mediante Alembic. El proyecto ya cuenta con una migración inicial asociada a la tabla de productos.",
                    },
                ],

                en: [
                    {
                        title:
                            "Separation of responsibilities",
                        description:
                            "The backend is organized into domain, application, infrastructure and presentation layers to keep business rules, use cases, persistence and the API separated.",
                    },
                    {
                        title: "FastAPI for the API",
                        description:
                            "FastAPI is used to expose backend endpoints with a structure designed to grow through additional modules and use cases.",
                    },
                    {
                        title:
                            "PostgreSQL and SQLAlchemy",
                        description:
                            "PostgreSQL is used as the relational database and SQLAlchemy as the persistence layer, keeping database models separated from domain entities.",
                    },
                    {
                        title:
                            "Migrations with Alembic",
                        description:
                            "Database schema changes are managed with Alembic. The project already includes an initial migration associated with the products table.",
                    },
                ],
            },

            learnings: {
                es: [
                    "Separar las reglas del dominio de la infraestructura facilita mantener el código organizado a medida que el proyecto crece.",
                    "Trabajar con entidades de dominio independientes de los modelos de persistencia ayuda a reducir el acoplamiento entre la lógica de negocio y la base de datos.",
                    "Dividir las operaciones de la aplicación en casos de uso permite mantener responsabilidades más claras.",
                    "Versionar los cambios de base de datos mediante migraciones facilita la evolución controlada del esquema.",
                ],

                en: [
                    "Separating domain rules from infrastructure helps keep the code organized as the project grows.",
                    "Using domain entities independently from persistence models helps reduce coupling between business logic and the database.",
                    "Dividing application operations into use cases helps maintain clearer responsibilities.",
                    "Versioning database changes through migrations enables controlled schema evolution.",
                ],
            },

            status: {
                es: "StockWise se encuentra en desarrollo. Actualmente está implementada la estructura principal del backend, la configuración de PostgreSQL, el modelo y la entidad inicial de productos, las migraciones con Alembic y los primeros endpoints para crear, listar y consultar productos por código.",

                en: "StockWise is currently under development. The main backend structure, PostgreSQL configuration, initial product entity and model, Alembic migrations, and the first endpoints for creating, listing and retrieving products by code are currently implemented.",
            },

            nextSteps: {
                es: [
                    "Continuar desarrollando el módulo de productos e inventario.",
                    "Implementar autenticación y gestión de usuarios.",
                    "Incorporar roles y permisos.",
                    "Desarrollar el módulo de ventas.",
                    "Implementar alertas y reportes.",
                    "Agregar pruebas automatizadas.",
                    "Desarrollar la interfaz frontend.",
                    "Incorporar Docker y preparar el despliegue.",
                    "Configurar un flujo de CI/CD.",
                ],

                en: [
                    "Continue developing the products and inventory module.",
                    "Implement authentication and user management.",
                    "Add roles and permissions.",
                    "Develop the sales module.",
                    "Implement alerts and reports.",
                    "Add automated testing.",
                    "Develop the frontend interface.",
                    "Introduce Docker and prepare deployment.",
                    "Configure a CI/CD workflow.",
                ],
            },

            screenshots: [],
        },
    },

    {
        slug: "carwash",
        title: "CarWash",
        status: "completed",
        featured: false,

        description: {
            es: "Sistema web de gestión para servicios de lavado de vehículos, desplegado y utilizado actualmente en operación real.",
            en: "Web-based management system for vehicle washing services, currently deployed and used in real-world operations.",
        },

        technologies: [
            "Python",
            "Django",
            "SQLite",
            "HTML",
            "CSS",
        ],

        image: null,
        github: null,
        demo: null,

        details: {
            problem: {
                es: "La operación de un negocio de lavado de vehículos requiere controlar clientes, vehículos, servicios, órdenes, pagos, promociones, gastos y seguimiento financiero desde un mismo lugar. Gestionar estos procesos de forma separada dificulta mantener trazabilidad sobre la operación diaria.",

                en: "Running a vehicle washing business requires managing customers, vehicles, services, orders, payments, promotions, expenses and financial tracking from a single place. Managing these processes separately makes it difficult to maintain visibility over daily operations.",
            },

            solution: {
                es: "CarWash centraliza la operación del negocio en una aplicación web desarrollada con Django. El sistema permite gestionar clientes y vehículos, registrar y controlar órdenes de servicio, aplicar promociones y descuentos, administrar pagos y gastos, manejar programas de fidelización y consultar reportes operativos y financieros.",

                en: "CarWash centralizes business operations in a web application built with Django. The system manages customers and vehicles, service orders, promotions and discounts, payments and expenses, loyalty programs, and operational and financial reporting.",
            },

            features: {
                es: [
                    "Gestión de clientes y vehículos.",
                    "Registro y seguimiento de órdenes de servicio.",
                    "Múltiples servicios asociados a una misma orden.",
                    "Control de estados de las órdenes.",
                    "Registro y validación de pagos.",
                    "Aplicación de descuentos y promociones.",
                    "Programa de fidelización con acumulación de lavadas.",
                    "Evidencias fotográficas de entrada y salida del vehículo.",
                    "Gestión de gastos.",
                    "Reportes operativos y financieros.",
                    "Control de acceso mediante autenticación y permisos.",
                ],

                en: [
                    "Customer and vehicle management.",
                    "Service order registration and tracking.",
                    "Multiple services associated with a single order.",
                    "Order status management.",
                    "Payment registration and validation.",
                    "Discount and promotion management.",
                    "Loyalty program based on accumulated washes.",
                    "Vehicle entry and exit photographic evidence.",
                    "Expense management.",
                    "Operational and financial reporting.",
                    "Access control through authentication and permissions.",
                ],
            },

            architecture: {
                es: "CarWash está desarrollado como una aplicación web monolítica con Django, organizada mediante diferentes aplicaciones para separar áreas funcionales como clientes, vehículos, órdenes, servicios, promociones, gastos, reportes y usuarios. Django ORM gestiona la persistencia de datos sobre SQLite y las plantillas de Django conforman la interfaz web.",

                en: "CarWash is built as a monolithic Django web application, organized into multiple applications that separate functional areas such as customers, vehicles, orders, services, promotions, expenses, reports and users. Django ORM manages data persistence with SQLite, while Django templates provide the web interface.",
            },

            technicalDecisions: {
                es: [
                    {
                        title: "Organización modular con Django",
                        description:
                            "Las principales áreas funcionales del sistema se encuentran separadas en aplicaciones Django, facilitando la organización del código y la evolución independiente de cada módulo.",
                    },
                    {
                        title: "Reglas de negocio en el dominio",
                        description:
                            "Las órdenes incorporan validaciones y reglas para controlar estados, descuentos, pagos, fidelización y relaciones entre clientes y vehículos, evitando operaciones inconsistentes.",
                    },
                    {
                        title: "Persistencia con Django ORM",
                        description:
                            "Los datos se gestionan mediante los modelos y relaciones de Django ORM, utilizando SQLite como base de datos de la aplicación.",
                    },
                    {
                        title: "Reportes a partir de la operación",
                        description:
                            "La información registrada en órdenes, pagos y gastos se consolida para generar reportes de caja, servicios, promociones, responsables y resultados de la operación.",
                    },
                ],

                en: [
                    {
                        title: "Modular organization with Django",
                        description:
                            "The main functional areas of the system are separated into Django applications, helping organize the codebase and allowing each module to evolve independently.",
                    },
                    {
                        title: "Business rules in the domain",
                        description:
                            "Orders include validations and rules for statuses, discounts, payments, loyalty and customer-vehicle relationships, helping prevent inconsistent operations.",
                    },
                    {
                        title: "Persistence with Django ORM",
                        description:
                            "Application data is managed through Django ORM models and relationships, using SQLite as the application's database.",
                    },
                    {
                        title: "Operational reporting",
                        description:
                            "Information recorded through orders, payments and expenses is consolidated to provide reports on cash flow, services, promotions, responsible users and business operations.",
                    },
                ],
            },

            learnings: {
                es: [
                    "Trabajar con una aplicación utilizada en operación real requiere adaptar el software a necesidades que aparecen durante el uso cotidiano.",
                    "Centralizar las reglas de negocio ayuda a mantener consistencia entre órdenes, pagos, promociones y programas de fidelización.",
                    "Separar el sistema en aplicaciones Django facilita organizar funcionalidades que crecen con el tiempo.",
                    "Los reportes permiten transformar la información operativa registrada por el sistema en datos útiles para el seguimiento del negocio.",
                ],

                en: [
                    "Working with an application used in real-world operations requires adapting the software to needs that emerge through everyday use.",
                    "Centralizing business rules helps maintain consistency across orders, payments, promotions and loyalty programs.",
                    "Separating the system into Django applications helps organize functionality as the application grows.",
                    "Reports transform operational information recorded by the system into useful data for business monitoring.",
                ],
            },

            status: {
                es: "CarWash se encuentra desplegado y es utilizado actualmente para apoyar la operación real de un negocio de lavado de vehículos. El sistema ha evolucionado con nuevas funcionalidades y ajustes realizados a partir de las necesidades identificadas durante su uso.",

                en: "CarWash is deployed and currently used to support the real-world operations of a vehicle washing business. The system has evolved through new features and adjustments based on needs identified during actual use.",
            },

            nextSteps: {
                es: [
                    "Continuar realizando mejoras a partir de las necesidades de operación.",
                    "Actualizar y ampliar las pruebas automatizadas existentes.",
                    "Continuar fortaleciendo validaciones y reglas de negocio.",
                    "Mejorar progresivamente la experiencia de usuario y los reportes.",
                ],

                en: [
                    "Continue improving the system based on operational needs.",
                    "Update and expand the existing automated tests.",
                    "Continue strengthening validations and business rules.",
                    "Progressively improve the user experience and reporting capabilities.",
                ],
            },

            screenshots: [],
        },
    },
];