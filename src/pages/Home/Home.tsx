import { Link } from "react-router-dom"
import React from "react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import proDevLogo from "@/assets/logo-pro-dev.svg"

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"


const Home = () => {


    
return (
<NavigationMenu viewport={false}>
    <NavigationMenuList>
        
        <NavigationMenuItem>
            <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "h-18 w-60")}>
                <Link to="/docs">Puntuación</Link>
            </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "h-18 w-60")}>
                <Link to="/docs">Calificación</Link>
            </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
             <NavigationMenuTrigger className="h-18 w-60">Idioma</NavigationMenuTrigger>
             <NavigationMenuContent>
                <ul className="w-60 p-2">
                    <ListItem  href="/docs/primitives/alert-dialog" title="ES">
                    
                    </ListItem>
                    <ListItem  href="/docs/primitives/alert-dialog" title="EN">
                     
                    </ListItem>  
                </ul>
              </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "h-18 w-60")}>
                <Link to="/">
                    <img src={proDevLogo} alt="ProDev Logo" className="h-18 w-auto" />
                </Link>
            </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
             <NavigationMenuTrigger className="h-18 w-60">Iniciar sesión</NavigationMenuTrigger>
             <NavigationMenuContent>
                <ul className="w-60 p-2">
                    <ListItem  href="/docs/primitives/alert-dialog" title="Iniciar con Github">
                    
                    </ListItem>
                    
                </ul>
              </NavigationMenuContent>
        </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu> 
)
   
}

export default Home;


