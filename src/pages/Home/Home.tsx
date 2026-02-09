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
<NavigationMenu>
    <NavigationMenuList>
        <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/docs">Puntuación</Link>
            </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/docs">Calificación</Link>
            </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
             <NavigationMenuTrigger>Idioma</NavigationMenuTrigger>
             <NavigationMenuContent>
                <ul className="w-96">
                    <ListItem  href="/docs/primitives/alert-dialog" title="ES">
                    
                    </ListItem>
                    <ListItem  href="/docs/primitives/alert-dialog" title="EN">
                     
                    </ListItem>  
                </ul>
              </NavigationMenuContent>
        </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu> 
)
   
}

export default Home;


