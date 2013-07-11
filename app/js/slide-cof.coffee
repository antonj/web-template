define ['jquery', 'velocity-tracker', 'log'], ($, VelocityTracker, log) ->
   
   limit = (val, min, max) ->
      return if val < min then min else if val > max then max else val
     
   win = $(window)
   win_height = win.height()

   class SlideCoffe
      constructor:  (@elem) ->
         @container = $(window)
         @m_down_x = 0
         @m_down_y = 0
         @m_down_height = @elem.height()
         @init_height = @elem.height()
         @m_move_x = 0
         @m_move_y = 0
         @max_height = 500
         @velocity_tracker = new VelocityTracker()
         @elem.on('mousedown', @slideDown)

      slideDown: (e) =>
         log('event', 'down', e)
         @m_down_x = e.clientX
         @m_down_y = e.clientY
         @m_down_height = @elem.height()
         @m_move_x = e.clientX
         @m_move_y = e.clientY
         
         @elem.off('mousedown', @slideDown)
         @container.on('mousemove', @slideMove)
         @container.on('mouseup', @slideUp)
         
         return false
    
      slideMove: (e) =>
         log('event', 'move', e.clientY)
         @velocity_tracker.addMovement(e)
         
         @m_move_x = e.clientX
         @m_move_y = e.clientY
         
         log('speed', @velocity_tracker.computeCurrentVelocity())
         move = e.clientY - @m_down_y
         height = limit(@m_down_height + move, @init_height, @max_height)
         
         @elem.css('height', height + 'px')
         return false
    
      slideUp: (e) =>
         log('event', 'up', e)
         @container.off('mousemove', @slideMove)
         @container.off('mouseup', @slideUp)
         @elem.on('mousedown', @slideDown)
         return false
   
   return SlideCoffe